import React, { useState } from "react";
import DatePicker from "./DatePicker";
import "./style.scss";

export default function AbsenceForm({ absences, onSubmit }) {
  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  const onDatesChange = ({ startDate, endDate }) => {
    setStart(startDate);
    setEnd(endDate);
  };

  const submit = event => {
    event.preventDefault();
    onSubmit(start, end);
    setStart();
    setEnd();
  };

  return (
    <div className="absence">
      <form id="absence__form" onSubmit={submit}>
        <div className="absence__header">
          <span>Krankmeldung</span>
        </div>
        <div className="absence__content__form">
          <DatePicker
            startDate={start}
            endDate={end}
            onDatesChange={onDatesChange}
            absences={absences}
          />
        </div>
        <div className="register__footer"></div>
        <button type="submit" className="register__footer__button">
          Abschicken
        </button>
      </form>
    </div>
  );
}
