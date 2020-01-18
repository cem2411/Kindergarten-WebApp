import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import { Spinner, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "../../../services/GlobalAxiosSettings";
import UserContext from "../../../context/user-context";

const ParentDashboard = () => {
  const DATE_FORMAT = "DD.MM.YYYY";
  const [ongoingAbsences, setOngoingAbsences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const user = useContext(UserContext);

  useEffect(() => {
    fetchAbsences();
  }, []);
  const fetchAbsences = () => {
    setIsLoading(true);
    axios
      .get("/absence", {
        params: {
          q: { child: user }
        }
      })
      .then(result => {
        setOngoingAbsences(
          result.data.filter(absence => {
            return (
              moment(absence.dateStart.slice(0, 10)).startOf("day") <=
                moment().startOf("day") &&
              moment().startOf("day") <=
                moment(absence.dateEnd.slice(0, 10).startOf("day"))
            );
          })
        );

        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return !isLoading ? (
    <div className="parentDashboard">
      <div>Willkommen, Familie {user.secondNameKid}</div>
      {ongoingAbsences.length > 0 ? (
        <div>Sie haben eine laufende Krankmeldung </div>
      ) : (
        <div>Sie haben keine laufenden Krankmeldungen </div>
      )}
      <Button className="btn btn-block" as={NavLink} to="/Absence">
        Zu meinen aktuellen Krankmeldung
      </Button>
    </div>
  ) : (
    <Spinner animation="border" />
  );
};
export default ParentDashboard;
