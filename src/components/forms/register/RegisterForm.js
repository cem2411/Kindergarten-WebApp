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
    group: "A"
  };

  resetState = () => {
    this.setState({
      users: [],
      email: "",
      password: "",
      firstNameKid: "",
      secondNameKid: "",
      group: "A"
    });
  };
  componentDidMount() {
    axios
      .get("/children")
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
    event.preventDefault();
    const firstNameKid = this.state.firstNameKid;
    const secondNameKid = this.state.secondNameKid;
    const group = this.state.group;
    const email = this.state.email;
    const password = this.state.password;

    axios
      .post("/children", {
        email: email,
        password: password,
        firstNameKid: firstNameKid,
        secondNameKid: secondNameKid,
        group: group
      })
      .then(result => {
        console.log(result);
        this.resetState();
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

        <form onSubmit={this.dataSendHandler} id="register__form">
          <div className="register__header">
            <span>Eltern Registrierung</span>
          </div>

          {/*  <div className="login__content__image">
              <img src={Logo} />
            </div> */}

          <div className="register__content__form">
            <div className="register__content__form-group">
              <label htmlFor="email">
                <span>Email: </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email eingeben..."
                value={this.state.email}
                onChange={event => {
                  this.setState({ email: event.target.value });
                }}
              />
            </div>

            <div className="register__content__form-group">
              <label htmlFor="password">
                <span>Passwort: </span>
              </label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                placeholder="Passwort eingeben..."
                onChange={event => {
                  this.setState({ password: event.target.value });
                }}
              />
            </div>

            <div className="register__content__form-group">
              <label htmlFor="firstNameKid">
                <span>Kind Vorname: </span>
              </label>
              <input
                type="text"
                name="firstNameKid"
                placeholder="Vorname des Kinds eingeben..."
                value={this.state.firstNameKid}
                onChange={event => {
                  this.setState({ firstNameKid: event.target.value });
                }}
              />
            </div>

            <div className="register__content__form-group">
              <label htmlFor="secondNameKid">
                <span>Kind Nachname: </span>
              </label>
              <input
                type="text"
                name="secondNameKid"
                placeholder="Nachname des Kinds eingeben..."
                value={this.state.secondNameKid}
                onChange={event => {
                  this.setState({ secondNameKid: event.target.value });
                }}
              />
            </div>

            <div className="register__content__form-group">
              <label htmlFor="group">
                <span>Kindergartengruppe: </span>
              </label>
              <select
                id="bla"
                name="kindergagrouprdengroup"
                form="register__form"
                value={this.state.group}
                onChange={event => {
                  this.setState({ group: event.target.value });
                }}
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

        <div>{users}</div>
      </div>
    );
  }
}
