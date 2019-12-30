import React, { useState } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";

export default function Datepicker() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [focused, setFocused] = useState();

  return (
    <div>
      <DateRangePicker
        startDate={startDate}
        startDateId="start_date_id"
        endDate={endDate}
        endDateId="end_date_id"
        onDatesChange={({ start, end }) => {
          console.log("setting new dates...");
          setStartDate(start);
          setEndDate(end);
          console.log("setting new dates...OK");
        }}
        focusedInput={focused}
        onFocusChange={focusedInput => setFocused(focusedInput)}
      />
    </div>
  );
}
