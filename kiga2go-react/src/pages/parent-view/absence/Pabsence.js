import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../../context/user-context";
import AbsenceForm from "../../../components/forms/absence/AbsenceForm";
import axios from "../../../services/GlobalAxiosSettings";
import { Modal, Button } from "react-bootstrap";

export default function Pabsence() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user = useContext(UserContext);
  const [absences, setAbsences] = useState([]);

  const fetchAbsences = () => {
    console.log(
      JSON.stringify({
        q: { child: user }
      })
    );
    axios
      .get("/absence", {
        params: {
          q: { child: user }
        }
      })
      .then(result => {
        console.log(result);
        setAbsences(result.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(fetchAbsences, []);

  const submit = (start, end) => {
    console.log(
      JSON.stringify({
        dateStart: start,
        dateEnd: end,
        child: user
      })
    );
    axios
      .post("/absence", {
        dateStart: start,
        dateEnd: end,
        child: user
      })
      .then(result => {
        fetchAbsences();
      })
      .catch(error => {
        console.log(error);
      });
  };

  const deleteButtonHandler = e => {
    deleteAbsence(e.target.value);
  };

  const deleteAbsence = id => {
    const newAbsenceArray = absences.filter(absence => {
      return absence._id !== id;
    });

    setAbsences(newAbsenceArray);
    axios.delete("absence/" + id);
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Krankmeldung bearbeiten</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="absence__form">
            <div className="absence__content__form">
              <div className="absence__content__form-group">
                <label htmlFor="dateStart">
                  <span>Von: </span>
                </label>
                <input type="date" name="dateStart" />
              </div>
              <div className="absence__content__form-group">
                <label htmlFor="dateEnd">
                  <span>Bis: </span>
                </label>
                <input type="date" name="dateEnd" />
              </div>
            </div>
            <div className="register__footer"></div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <AbsenceForm onSubmit={submit} />
      <div class="table">
        <h2>Liste der Abwesenheiten</h2>

        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Von</th>
              <th>Bis</th>
            </tr>
          </thead>

          <tbody>
            {absences.map(absence => (
              <tr key={absence}>
                <td>{absence.dateStart}</td>
                <td>
                  {absence.dateEnd}
                  <button
                    value={absence._id}
                    className="btn btn-outline-danger"
                    onClick={deleteButtonHandler}
                  >
                    Delete
                  </button>

                  <button
                    value={absence._id}
                    className="btn btn-outline-primary"
                    onClick={handleShow}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
