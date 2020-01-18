import React, { useState, useContext } from "react";
import moment from "moment";
import { DateRangePicker } from "react-dates";

export default function DatePicker({
  absences,
  startDate,
  endDate,
  onDatesChange,
  editAbsence
}) {
  const [focusedInput, setFocusedInput] = useState();

  const isDayBlocked = day => {
    let isBlocked = false;
    for (let absence of absences) {
      if (!editAbsence || editAbsence !== absence) {
        isBlocked =
          isBlocked ||
          moment(day).isBetween(
            moment(absence.dateStart).subtract(1, "d"),
            moment(absence.dateEnd)
          );
      }
    }
    return isBlocked;
  };

  return (
    <DateRangePicker
      startDate={startDate}
      startDateId="start_date"
      endDate={endDate}
      endDateId="end_date"
      minimumNights={0}
      //   firstDayOfWeek={1}
      onDatesChange={onDatesChange}
      isDayBlocked={isDayBlocked}
      focusedInput={focusedInput}
      onFocusChange={focused => setFocusedInput(focused)}
      displayFormat={() => "DD.MM.YYYY"}
    />
  );
}
