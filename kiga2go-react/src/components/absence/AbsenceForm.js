import React, { useState } from "react";
import DatePicker from "./DatePicker";

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
        <div className="absence__form__header">
          <h2>Krankmeldung</h2>
        </div>
        <div className="absence__form__content">
          <DatePicker
            className="absence__form__content__button"
            absences={absences}
            startDate={start}
            endDate={end}
            onDatesChange={onDatesChange}
          />
        </div>
        <div className="absence__form__footer"></div>
        <button type="submit" className="register__footer__button">
          Abschicken
        </button>
      </form>
    </div>
  );
}
