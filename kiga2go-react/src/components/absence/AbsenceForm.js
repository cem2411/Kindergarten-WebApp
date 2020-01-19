import React, { useState } from "react";
import moment from "moment";
import swal from "sweetalert";
import DatePicker from "./DatePicker";

export default function AbsenceForm({ absences, onSubmit }) {
  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  const validateBooking = ({ startDate, endDate }) => {
    let isValid = true;
    for (let bookedAbsence of absences) {
      isValid =
        isValid &&
        !moment(bookedAbsence.dateStart).isBetween(
          moment(startDate).subtract(1, "d"),
          moment(endDate)
        );
    }
    return isValid;
  };

  const onDatesChange = ({ startDate, endDate }) => {
    if (validateBooking({ startDate, endDate })) {
      setStart(startDate);
      setEnd(endDate);
    } else {
      swal("Überbuchen einer anderen Krankmeldung ist nicht möglich!");
    }
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
