import React, { Component } from "react";
// import Logp from "..//..";

export class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login">
        <form id="login__form">

          <div className="login__header">Login</div>

          <div className="loging__content">
           
            {/*  <div className="login__content__image">
              <img src={Logo} />
            </div> */}

            <div className="login__content__form">
              
              <div className="login__content__form-group">
                <label htmlFor="username">Username: </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Usernamen eingeben..."
                />
              </div>

              <div className="login__content__form-group">
                <label htmlFor="password">Passwort: </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Passwort eingeben..."
                />
              </div>

              <label htmlFor="usertype">Benutzertyp: </label>
              <select name="usertype" form="login__form">
                <option value="0" defaultValue="0">Erziehungsberechtige/er</option>
                <option value="1">Mitarbeiter</option>
              </select>

            </div>

          </div>

          <div className="login__footer">
            <button className="login__footer__button">Login</button>
          </div>

        </form>
      </div>
    );
  }
}
