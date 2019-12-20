import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../../context/user-context";
import AbsenceForm from "../../../components/forms/absence/AbsenceForm";
import axios from "../../../services/GlobalAxiosSettings";

export default function Pabsence() {
  const user = useContext(UserContext);
  const [absences, setAbsences] = useState([]);

  const fetchAbsences = () => {
    console.log(
      JSON.stringify({
        q: {"child": user }
      })
    );
    axios
      .get("/absence", {
        params: {
          q: {"child": user }
        }
      })
      .then(result => {
        console.log(result);
        setAbsences(result.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(fetchAbsences, []);

  const submit = (start, end) => {
    console.log(
      JSON.stringify({
        dateStart: start,
        dateEnd: end,
        child: user
      })
    );
    axios
      .post("/absence", {
        dateStart: start,
        dateEnd: end,
        child: user
      })
      .then(result => {
        fetchAbsences();
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <AbsenceForm onSubmit={submit} />
      <div class="table">
        <h2>Liste der Abwesenheiten</h2>

        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Von</th>
              <th>Bis</th>
            </tr>
          </thead>

          <tbody>
            {absences.map(absence => (
              <tr key={absence}>
                <td>{absence.dateStart}</td>
                <td>{absence.dateEnd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
