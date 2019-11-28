import React, { Component } from "react";
import axios from "../restdb/GlobalAxiosSettings";
// import Logp from "..//..";
import "./style.scss";

export class Login extends Component {
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
                  onChange={event => {
                    this.setState({ username: event.target.value });
                  }}
                />
              </div>

              <div className="login__content__form-group">
                <label htmlFor="password">Passwort: </label>
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
