import React, { useContext } from "react";
import UserContext from "../../../context/user-context";
import AbsenceForm from "../../../components/forms/absence/AbsenceForm";
import axios from "../../../services/GlobalAxiosSettings";

export default function Pabsence() {
  const user = useContext(UserContext);

  const submit = (start, end) => {
    axios
      .post("/absence", {
        dateStart: start,
        dateEnd: end,
        child: [user]
      })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return <AbsenceForm onSubmit={submit} />;
}
