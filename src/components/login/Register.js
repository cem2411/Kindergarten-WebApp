import React, { Component } from "react";
// import Logp from "..//..";

export class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="register">
        <form id="register__form">
          <div className="register__header">Login</div>

          <div className="register__content">
            {/*  <div className="login__content__image">
              <img src={Logo} />
            </div> */}

            <div className="register__content__form">
              <div className="register__content__form-group">
                <label htmlFor="username">Username: </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Usernamen eingeben..."
                />
              </div>

              <div className="register__content__form-group">
                <label htmlFor="password">Passwort: </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Passwort eingeben..."
                />
              </div>

              <div className="register__content__form-group">
                <label htmlFor="usertype">Benutzertyp: </label>
                <select name="usertype" form="register__form">
                  <option value="0" defaultValue="0">
                    Erziehungsberechtige/er
                  </option>
                  <option value="1">Mitarbeiter</option>
                </select>
              </div>

            </div>

          </div>

          <div className="register__footer">
            <button className="register__footer__button">Registrieren</button>
          </div>
        </form>
      </div>
    );
  }
}
