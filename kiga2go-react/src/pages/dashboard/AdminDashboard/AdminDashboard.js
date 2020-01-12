import React from "react";
import AbsenceEntry from "../../../components/absence/AbsenceEntry";
import moment from "moment";
import { Spinner } from "react-bootstrap";

const AdminDashboard = ({ user, absences }) => {
  const DATE_FORMAT = "DD.MM.YYYY";

  return (
    <div className="AdminDashboard">
      <h1>
        Hello {user.firstNameKid} {user.secondNameKid}
      </h1>
      <h2 style={{ textAlign: "left" }}>Aktuelle Krankmeldungen</h2>

      {absences ? (
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
                return (
                  <tr key={absence._id}>
                    <td>{absence.child[0].firstNameKid}</td>
                    <td>{absence.child[0].secondNameKid}</td>
                    <td>{absence.child[0].group}</td>
                    <td>{moment(absence.dateStart).format(DATE_FORMAT)}</td>
                    <td>{moment(absence.dateEnd).format(DATE_FORMAT)}</td>
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
      ) : (
        <Spinner animation="border" variant="danger" />
      )}
    </div>
  );
};
export default AdminDashboard;
