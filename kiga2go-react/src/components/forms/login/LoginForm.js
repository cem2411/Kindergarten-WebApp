import React, { useState } from "react";
import logo from "../../../img/logo/logo.png";
import "./style.scss";

export default function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <form id="login__form">
        <div className="login__header">
          <span>Login</span>
        </div>

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
          </div>
        </div>
        <div className="login__footer"></div>
      </form>
      <button
        className="login__footer__button"
        id="button"
        onClick={() => onSubmit({ email, password })}
      >
        Login
      </button>
    </div>
  );
}
