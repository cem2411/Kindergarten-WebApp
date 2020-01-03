import React from "react";
import moment from "moment";
import AbsenceEntry from "./AbsenceEntry";

export default function AbsenceList({ absences, onUpdate, onDelete }) {
  return (
    <div class="table">
      <h2>Liste der Abwesenheiten</h2>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Von</th>
            <th>Bis</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {absences.map(absence => (
            <AbsenceEntry
              absence={absence}
              absences={absences}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
