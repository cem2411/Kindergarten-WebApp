import React, { useState, useEffect } from "react";
import moment from "moment";
import { Spinner } from "react-bootstrap";
import axios from "../../../services/GlobalAxiosSettings";

const AdminDashboard = ({ user, absences }) => {
  const DATE_FORMAT = "DD.MM.YYYY";
  const [isLoading, setIsLoading] = useState(true);

  const [ongoingAbsences, setOngoingAbsences] = useState([]);

  useEffect(() => {
    const fetchAbsences = async () => {
      const result = await axios.get("/absence");
      setOngoingAbsences(
        result.data.filter(absence => {
          return (
            moment(absence.dateStart.slice(0, 10)) <= moment() &&
            moment() <= moment(absence.dateEnd.slice(0, 10))
          );
        })
      );
      setIsLoading(false);
    };
    fetchAbsences();
  }, []);

  return (
    <div className="adminDashboard">
      <h1>
        Hello {user.firstNameKid} {user.secondNameKid}
      </h1>
      <h2 style={{ textAlign: "left" }}>Aktuelle Krankmeldungen</h2>

      {!isLoading ? (
        ongoingAbsences ? (
          ongoingAbsences.length > 0 ? (
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
                {ongoingAbsences.map(absence => {
                  return (
                    <tr key={absence._id}>
                      <td>{absence.child[0].firstNameKid}</td>
                      <td>{absence.child[0].secondNameKid}</td>
                      <td>{absence.child[0].group}</td>
                      <td>{moment(absence.dateStart).format(DATE_FORMAT)}</td>
                      <td>{moment(absence.dateEnd).format(DATE_FORMAT)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <span style={{ fontSize: "2rem" }}>
              Keine aktuellen Krankmeldungen
            </span>
          )
        ) : (
          <Spinner animation="border" variant="danger" />
        )
      ) : (
        <Spinner animation="border" />
      )}
    </div>
  );
};
export default AdminDashboard;
