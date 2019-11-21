import React, { Component } from "react";
import axios from "axios";
// import Logp from "..//..";
import "./style.scss";

export class Login extends Component {
  submitHandler(event) {
    event.preventDefault();
    console.log(event);

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const query =
      '?q={"username": "' + username + '", "password": "' + password + '"}';
    axios
      .post("https://kiga2go-359d.restdb.io/rest/login" + query, {
        headers: {
          "content-type": "application/json",
          "x-apikey": "5dd38bc54658275ac9dc1b94",
          "cache-control": "no-cache"
        }
      })
      .then(response => {
        console.log(response);
        if (response.data.length > 0) {
          alert("login erfolgreich");
        } else {
          alert("benutzername oder passwort falsch");
        }
      });
  }

  render() {
    return (
      <div className="login" ref={this.props.containerRef}>
        <form id="login__form" onSubmit={this.submitHandler}>
          <div className="login__header">Login</div>

          <div className="loging__content">
            {/*  <div className="login__content__image">
              <img src={Logo} />
            </div> */}

            <div className="login__content__form">
              <div className="login__content__form-group">
                <label htmlFor="username">Email: </label>
                <input
                  type="email"
                  name="username"
                  placeholder="Email eingeben..."
                  id="username"
                />
              </div>

              <div className="login__content__form-group">
                <label htmlFor="password">Passwort: </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Passwort eingeben..."
                  id="password"
                />
              </div>
            </div>
          </div>

          <div className="login__footer">
            <button className="login__footer__button" id="button">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}
