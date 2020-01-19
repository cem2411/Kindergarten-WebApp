import React, { useState } from "react";
import logo from "../../../img/logo/logo.png";
import { login } from "../../../services/userService";
import "./style.scss";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  const validateUser = event => {
    event.preventDefault();
    login({ email, password })
      .then(response => {
        if (response.data.status === 200) {
          setErrorMessage();
          setUser(response.data.payload);
        } else {
          setErrorMessage(response.data.payload);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="login">
      <form id="login__form" onSubmit={validateUser}>
        <div className="loging__content">
          <div className="login__content__image">
            <img src={logo} href="kiga2go" height="150" />
          </div>
          <div className="login__content__form">
            <div className="login__content__form-group">
              <label htmlFor="email">
                <span>Email: </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email eingeben..."
                id="email"
                onChange={event => setEmail(event.target.value)}
              />
            </div>
            <div className="login__content__form-group">
              <label htmlFor="password">
                <span>Passwort: </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Passwort eingeben..."
                id="password"
                onChange={event => setPassword(event.target.value)}
              />
            </div>
            {errorMessage ? <p>{errorMessage}</p> : <div />}
          </div>
        </div>
        <div className="login__footer"></div>
        <button className="login__footer__button" id="button">
          Login
        </button>
      </form>
    </div>
  );
}
