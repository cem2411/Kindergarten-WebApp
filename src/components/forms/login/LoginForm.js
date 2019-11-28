import React, { Component } from "react";
import axios from "../../../database/GlobalAxiosSettings";
import logo from "../../../img/logo/logo.png";
import "./style.scss";

export class LoginForm extends Component {
  state = {
    users: [],
    email: "",
    password: ""
  };

  componentDidMount() {
    axios
      .get("/rest/login")
      .then(response => {
        this.setState({
          users: response.data
        });

        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
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
                <label htmlFor="username">
                  <span>Email: </span>
                </label>
                <input
                  type="email"
                  name="username"
                  placeholder="Email eingeben..."
                  id="username"
                  onChange={event => {
                    this.setState({ username: event.target.value });
                  }}
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
                  onChange={event => {
                    this.setState({ password: event.target.value });
                  }}
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
