import React, { useContext, useState, useEffect } from "react";
import Context from "../../context/user-context";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import ParentDashboard from "./ParentDashboard/ParentDashboard";
import axios from "../../services/GlobalAxiosSettings";
import moment from "moment";

const Dashboard = props => {
  const user = useContext(Context);

  const [allAbsences, setAllAbsences] = useState();

  useEffect(() => {
    axios
      .get("/absence")
      .then(response => {
        console.log("absence data:", response.data);
        setAllAbsences(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  let absences = allAbsences
    ? allAbsences.filter(absence => {
        return (
          moment(absence.dateStart.slice(0, 10)) <=
          moment() <=
          moment(absence.dateEnd.slice(0, 10))
        );
      })
    : [];

  console.log(user);
  return (
    <div className="Dashboard">
      {user.role === "admin" ? (
        <AdminDashboard absences={absences} user={user} />
      ) : (
        <ParentDashboard />
      )}
    </div>
  );
};

export default Dashboard;
