import React, { useState } from "react";
import { register } from "../../services/userService";
import "./style.scss";

export default function RegisterForm({}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstNameKid, setFirstNameKid] = useState("");
  const [secondNameKid, setSecondNameKid] = useState("");
  const [group, setGroup] = useState("A");

  const reset = () => {
    setEmail("");
    setPassword("");
    setFirstNameKid("");
    setSecondNameKid("");
    setGroup("A");
  };

  const submit = event => {
    event.preventDefault();
    register({
      email,
      password,
      firstNameKid,
      secondNameKid,
      group
    })
      .then(response => {
        alert(`Benutzer ${email} erfolgreich angelegt!`);
        reset();
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="register">
      <form onSubmit={submit} id="register__form">
        <div className="register__header">
          <h2>Eltern Registrierung</h2>
        </div>
        <div className="register__content__form">
          <div className="register__content__form-group">
            <label htmlFor="email">
              <span>Email: </span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email eingeben..."
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </div>

          <div className="register__content__form-group">
            <label htmlFor="password">
              <span>Passwort: </span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Passwort eingeben..."
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </div>

          <div className="register__content__form-group">
            <label htmlFor="firstNameKid">
              <span>Kind Vorname: </span>
            </label>
            <input
              type="text"
              name="firstNameKid"
              id="firstNameKid"
              placeholder="Vorname des Kinds eingeben..."
              value={firstNameKid}
              onChange={event => setFirstNameKid(event.target.value)}
            />
          </div>

          <div className="register__content__form-group">
            <label htmlFor="secondNameKid">
              <span>Kind Nachname: </span>
            </label>
            <input
              type="text"
              name="secondNameKid"
              id="secondNameKid"
              placeholder="Nachname des Kinds eingeben..."
              value={secondNameKid}
              onChange={event => setSecondNameKid(event.target.value)}
            />
          </div>

          <div className="register__content__form-group">
            <label htmlFor="group">
              <span>Kindergartengruppe: </span>
            </label>
            <select
              id="group"
              name="group"
              form="register__form"
              value={group}
              onChange={event => setGroup(event.target.value)}
            >
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
          </div>
        </div>

        <div className="register__footer">
          <button className="register__footer__button" type="submit">
            Registrieren
          </button>
        </div>
      </form>
    </div>
  );
}
