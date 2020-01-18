import React, { useEffect, useState } from "react";
import moment from "moment";
import axios from "../../../services/GlobalAxiosSettings";
import Loading from "../../../components/loading/Loading";
import "./style.scss";

const DATE_FORMAT = "DD.MM.YYYY";

export default function Aabsence() {
  const [absences, setAbsences] = useState();
  const [showPast, setShowPast] = useState(true);
  const [showCurrent, setShowCurrent] = useState(true);
  const [showFuture, setShowFuture] = useState(true);
  const [showList, setShowList] = useState([]);
  useEffect(() => {
    axios
      .get("/absence")
      .then(response => {
        console.log("absence data:", response.data);
        setAbsences(response.data);
        setShowList(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    updateAbsences();
  }, [showPast, showCurrent, showFuture]);

  const updateAbsences = () => {
    let fertig = [];

    if (absences !== undefined) {
      if (showPast) {
        fertig = [...fertig].concat(
          absences.filter(
            absence =>
              moment(absence.dateStart) < moment() &&
              moment(absence.dateEnd) < moment()
          )
        );
      }
      if (showCurrent) {
        fertig = [...fertig].concat(
          absences.filter(
            absence =>
              moment(absence.dateStart) <= moment() &&
              moment() <= moment(absence.dateEnd)
          )
        );
      }
      if (showFuture) {
        fertig = [...fertig].concat(
          absences.filter(absence => moment() < moment(absence.dateStart))
        );
      }
      setShowList(fertig);
    }
  };
  return absences ? (
    <div className="main-container">
      <div className="table">
        <h2>Liste der Abwesenheiten</h2>
        <div>
          <input
            onChange={() => setShowPast(!showPast)}
            type="checkbox"
            name="past"
            value="past"
            checked={showPast}
          />
          <label htmlFor="past">Show Past</label>
          <input
            onChange={() => setShowCurrent(!showCurrent)}
            checked={showCurrent}
            type="checkbox"
            name="current"
            value="current"
          />
          <label htmlFor="current">Show Current</label>
          <input
            onChange={() => setShowFuture(!showFuture)}
            checked={showFuture}
            type="checkbox"
            name="future"
            value="future"
          />
          <label htmlFor="future">Show future</label>
        </div>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Vorname</th>
              <th>Nachname</th>
              <th>Gruppe</th>
              <th>Von</th>
              <th>Bis</th>
            </tr>
          </thead>
          <tbody>
            {showList.length > 0 ? (
              showList.map(absence => {
                return (
                  <tr key={absence._id}>
                    <td>{absence.child[0].firstNameKid}</td>
                    <td>{absence.child[0].secondNameKid}</td>
                    <td>{absence.child[0].group}</td>
                    <td>{moment(absence.dateStart).format(DATE_FORMAT)}</td>
                    <td>{moment(absence.dateEnd).format(DATE_FORMAT)}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>Nothing to show</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <Loading />
  );
}
