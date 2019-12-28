import React, { useEffect, useState } from "react";
import axios from "../../../services/GlobalAxiosSettings";

export default function Aabsence() {
  const [absences, setAbsences] = useState([]);
  useEffect(() => {
    axios
      .get("/absence")
      .then(response => {
        console.log("absence data:", response.data);
        setAbsences(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="main-container">
      <div className="table">
        <h2>Liste der Abwesenheiten</h2>

        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Vorname</th>
              <th>Nachname</th>
              <th>Gruppe</th>
              <th>Von</th>
              <th>Bis</th>
            </tr>
          </thead>
          <tbody>
            {absences.length > 0 ? (
              absences.map(absence => {
                console.log(absence);
                return (
                  <tr key={absence._id}>
                    <td>{absence.child[0].firstNameKid}</td>
                    <td>{absence.child[0].secondNameKid}</td>
                    <td>{absence.child[0].group}</td>
                    <td>{absence.dateStart}</td>
                    <td>{absence.dateEnd}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>Nothing to show</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
