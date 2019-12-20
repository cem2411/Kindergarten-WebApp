import React, { useState } from "react";
import "./style.scss";

export default function AbsenceForm({ onSubmit }) {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const submit = () => {
    onSubmit(start, end);
    setStart("");
    setEnd("");
  };

  return (
    <div className="absence">
      <form id="absence__form">
        <div className="absence__header">
          <span>Krankmeldung</span>
        </div>
        <div className="absence__content__form">
          <div className="absence__content__form-group">
            <label htmlFor="dateStart">
              <span>Von: </span>
            </label>
            <input
              type="date"
              name="dateStart"
              value={start}
              onChange={event => setStart(event.target.value)}
            />
          </div>
          <div className="absence__content__form-group">
            <label htmlFor="dateEnd">
              <span>Bis: </span>
            </label>
            <input
              type="date"
              name="dateEnd"
              value={end}
              onChange={event => setEnd(event.target.value)}
            />
          </div>
        </div>
        <div className="register__footer"></div>
      </form>
      <button
        type="submit"
        className="register__footer__button"
        onClick={submit}
      >
        Abschicken
      </button>
    </div>
  );
}
