import React, { Component } from "react";
// import Logp from "..//..";
import "./style.scss";

export class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="register" >
        <form id="register__form">
          <div className="register__header">Registrierung</div>

       {/*  <div className="login__content__image">
              <img src={Logo} />
            </div> */}

            <div className="register__content__form">
              <div className="register__content__form-group">
                <label htmlFor="firstname">Vorname: </label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="Vorname eingeben..."
                />
              </div>

              <div className="register__content__form-group">
                <label htmlFor="secondname">Nachname: </label>
                <input
                  type="text"
                  name="secondname"
                  placeholder="Nachname eingeben..."
                />
              </div>

              <div className="register__content__form-group">
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email eingeben..."
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
                <label htmlFor="firstnameK">Kind Vorname: </label>
                <input
                  type="text"
                  name="firstnameK"
                  placeholder="Vorname des Kinds eingeben..."
                />
              </div>

              <div className="register__content__form-group">
                <label htmlFor="secondnameK">Kind Nachname: </label>
                <input
                  type="text"
                  name="secondnameK"
                  placeholder="Nachname des Kinds eingeben..."
                />
              </div>

              <div className="register__content__form-group">
                <label htmlFor="kindergarden">Kindergarten: </label>
                <select name="kindergarden" form="register__form">
                  <option value="Märchenwelt">
                    Kiga Märchenwelt
                  </option>
                  <option value="Other">Kiga B</option>
                </select>
              </div>

              <div className="register__content__form-group">
                <label htmlFor="kindergardengroup">Kindergartengruppe: </label>
                <select name="kindergardengroup" form="register__form">
                  <option value="A">
                    A
                  </option>
                  <option value="B">B</option>
                </select>
              </div>

              <div className="register__content__form-group">
                <label htmlFor="usertype">Benutzertyp: </label>
                <select name="usertype" form="register__form">
                  <option defaultValue="0" value="0">
                    Erziehungsberechtige/er
                  </option>
                  <option value="1">Mitarbeiter</option>
                </select>
              </div>

              <div className="register__content__form-group">
                <label htmlFor="activation">Aktivierungscode für Mitarbeiter: </label>
                <input
                  type="text"
                  name="avtivation"
                  pattern="54321"
                  placeholder="Aktivierungscode eingeben..."
                />
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
