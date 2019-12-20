import React, { useEffect, useState } from "react";
import axios from "../../../services/GlobalAxiosSettings";

export default function Aabsence() {
  const [absences, setAbsences] = useState([]);
  useEffect(() => {
    axios
      .get("/absence")
      .then(response => {
        console.log(response.data);
        setAbsences(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

    return (
      <div className="main-container">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
        </head>

        <div class="table">
          <h2>Liste der Abwesenheiten</h2>

          <table class="table table-bordered table-hover">
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
              {
                absences.map(absence => (
                  <tr key={absence._id}>
                    <td>{absence.child[0].firstNameKid}</td>
                    <td>{absence.child[0].secondNameKid}</td>
                    <td>{absence.child[0].group}</td>
                    <td>{absence.dateStart}</td>
                    <td>{absence.dateEnd}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }

