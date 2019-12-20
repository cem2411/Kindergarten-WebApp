import React, { useContext } from "react";
import UserContext from "../../context/user-context";
import { Redirect } from "react-router-dom";

export default function App() {
  const user = useContext(UserContext);

  return user.role === "admin" ? (
    <Redirect to={"/ListAbsence"} />
  ) : (
    <Redirect to={"/Absence"} />
  );
}
