import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../../context/user-context";
import AbsenceForm from "../../../components/absence/AbsenceForm";
import AbsenceList from "../../../components/absence/AbsenceList";

import axios from "../../../services/GlobalAxiosSettings";
import Loading from "../../../components/loading/Loading";

export default function Pabsence() {
  const user = useContext(UserContext);
  const [absences, setAbsences] = useState();
  const fetchAbsences = () => {
    setAbsences();
    axios
      .get("/absence", {
        params: {
          q: { child: user }
        }
      })
      .then(result => setAbsences(result.data))
      .catch(error => console.log(error));
  };
  useEffect(fetchAbsences, []);

  const submit = (start, end) => {
    axios
      .post("/absence", {
        dateStart: start,
        dateEnd: end,
        child: user
      })
      .then(result => fetchAbsences())
      .catch(error => console.log(error));
  };

  const deleteAbsence = deletedAbsence => {
    const newAbsenceArray = absences.filter(absence => {
      return absence !== deletedAbsence;
    });
    setAbsences(newAbsenceArray);
    axios.delete("absence/" + deletedAbsence._id);
  };

  const updateAbsence = absence => {
    console.log(absence);
    axios
      .put(`/absence/${absence._id}`, absence)
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };

  return absences ? (
    <div>
      <AbsenceForm absences={absences} onSubmit={submit} />
      <AbsenceList
        absences={absences}
        onUpdate={updateAbsence}
        onDelete={deleteAbsence}
      />
    </div>
  ) : (
    <Loading />
  );
}
