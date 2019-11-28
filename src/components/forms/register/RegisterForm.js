import React, { Component } from "react";
import axios from "../../../database/GlobalAxiosSettings";
import "./style.scss";

export default class RegisterForm extends Component {
  state = {
    users: [],
    email: "",
    password: "",
    firstNameKid: "",
    secondNameKid: "",
    group: ""
  };

  componentDidMount() {
    axios
      .get("/rest/children")
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

  dataSendHandler = event => {
    const email = this.state.email;
    const password = this.state.password;
    const firstNameKid = this.state.firstNameKid;
    const secondNameKid = this.state.secondNameKid;
    const group = this.state.group;

    axios
      .post("/rest/children", {
        firstNameKid: firstNameKid,
        email: email,
        secondNameKid: secondNameKid,
        group: group,
        password: password
      })

      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const users = this.state.users.map(user => (
      <div key={user._id}>
        <span>Email: {user.email}</span>
        <span>Passwort: {user.password}</span>
      </div>
    ));

    return (
      <div className="register">
        <br></br>
        <br></br>
        <br></br>

        <form id="register__form">
          <div className="register__header">Eltern Registrierung</div>

          {/*  <div className="login__content__image">
              <img src={Logo} />
            </div> */}

          <div className="register__content__form">
            <div className="register__content__form-group">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                name="email"
                placeholder="Email eingeben..."
                onChange={event => {
                  this.setState({ email: event.target.value });
                }}
              />
            </div>

            <div className="register__content__form-group">
              <label htmlFor="password">Passwort: </label>
              <input
                type="password"
                name="password"
                placeholder="Passwort eingeben..."
                onChange={event => {
                  this.setState({ password: event.target.value });
                }}
              />
            </div>

            <div className="register__content__form-group">
              <label htmlFor="firstNameKid">Kind Vorname: </label>
              <input
                type="text"
                name="firstNameKid"
                placeholder="Vorname des Kinds eingeben..."
                onChange={event => {
                  this.setState({ firstNameKid: event.target.value });
                }}
              />
            </div>

            <div className="register__content__form-group">
              <label htmlFor="secondNameKid">Kind Nachname: </label>
              <input
                type="text"
                name="secondNameKid"
                placeholder="Nachname des Kinds eingeben..."
                onChange={event => {
                  this.setState({ secondNameKid: event.target.value });
                }}
              />
            </div>

            <div className="register__content__form-group">
              <label htmlFor="group">Kindergartengruppe: </label>
              <select
                name="kindergagrouprdengroup"
                form="register__form"
                onChange={event => {
                  this.setState({ group: event.target.value });
                }}
              >
                <option value="A" defaultValue="A">
                  A
                </option>
                <option value="B">B</option>
              </select>
            </div>
          </div>

          <div className="register__footer">
            <button
              className="register__footer__button"
              onClick={this.dataSendHandler}
            >
              Registrieren
            </button>
          </div>
        </form>

        <div>{users}</div>
      </div>
    );
  }
}
