import React, { useState } from "react";
import moment from "moment";
import DatePicker from "./DatePicker";

const DATE_FORMAT = "DD.MM.YYYY";

export default function AbsenceEntry({ absence, onUpdate, onDelete }) {
  const [isEditMode, setEditMode] = useState(false);
  const [start, setStart] = useState(moment(absence.dateStart));
  const [end, setEnd] = useState(moment(absence.dateEnd));

  const save = () => {
    absence.dateStart = start;
    absence.dateEnd = end;
    onUpdate(absence);
    setEditMode(false);
  };

  const onDatesChange = ({ startDate, endDate }) => {
    setStart(startDate);
    setEnd(endDate);
  };

  return isEditMode ? (
    <tr>
      <td>
        <DatePicker
          startDate={start}
          endDate={end}
          onDatesChange={onDatesChange}
        />
      </td>
      <td>
        <button className="register__footer__button" onClick={save}>
          Speichern
        </button>
      </td>
    </tr>
  ) : (
    <tr key={absence}>
      <td>{start.format(DATE_FORMAT)}</td>
      <td>{end.format(DATE_FORMAT)}</td>
      <td>
        <button
          className="btn btn-outline-danger"
          onClick={() => onDelete(absence)}
        >
          Delete
        </button>
        <button
          value={absence._id}
          className="btn btn-outline-primary"
          onClick={() => setEditMode(true)}
        >
          Edit
        </button>
      </td>
    </tr>
  );
}
