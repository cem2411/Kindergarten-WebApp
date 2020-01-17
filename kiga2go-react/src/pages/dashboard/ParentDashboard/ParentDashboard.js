import React, { useState, useEffect } from "react";
import moment from "moment";
import { Spinner, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "../../../services/GlobalAxiosSettings";

const ParentDashboard = ({ user, absences }) => {
  const DATE_FORMAT = "DD.MM.YYYY";
  const [ongoingAbsences, setOngoingAbsences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return !isLoading ? (
    <div className="parentDashboard">
      {ongoingAbsences.length > 0 && (
        <div>Sie haben 1 laufende Krankmeldungen </div>
      )}
      <Button className="btn btn-block" as={NavLink} to="/Absence">
        Zu meinen aktuellen Krankmeldung
      </Button>
    </div>
  ) : (
    <Spinner animation="border" />
  );
};
export default ParentDashboard;
