import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import { Spinner, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "../../../services/GlobalAxiosSettings";
import UserContext from "../../../context/user-context";
import "./style.scss";

const ParentDashboard = () => {
  const DATE_FORMAT = "DD.MM.YYYY";
  const [ongoingAbsences, setOngoingAbsences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const user = useContext(UserContext);

  useEffect(() => {
    fetchAbsences();
  }, []);
  const fetchAbsences = () => {
    setIsLoading(true);
    axios
      .get("/absence", {
        params: {
          q: { child: user }
        }
      })
      .then(result => {
        setOngoingAbsences(
          result.data.filter(
            absence =>
              (moment(absence.dateStart).diff(moment(), "days") === 0 ||
                moment(absence.dateStart) < moment()) &&
              (moment(absence.dateEnd).diff(moment(), "days") === 0 ||
                moment() < moment(absence.dateEnd))
          )
        );

        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return !isLoading ? (
    <div className="parentDashboard">
      <h1>
        <span>Willkommen Familie {user.secondNameKid} !</span>
      </h1>
      {ongoingAbsences.length > 0 ? (
        <h2>
          <span>Sie haben eine laufende Krankmeldung: </span>
        </h2>
      ) : (
        <h2>
          <span>Sie haben keine laufende Krankmeldung. </span>
        </h2>
      )}
      <Button className="button" as={NavLink} to="/absence">
        Zu meinen Krankmeldungen
      </Button>
    </div>
  ) : (
    <Spinner animation="grow" variant="primary" />
  );
};
export default ParentDashboard;
