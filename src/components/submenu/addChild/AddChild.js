import React, { Component } from "react";
import axios from "../../restdb/GlobalAxiosSettings";
import "./style.scss";

export class AddChild extends Component {
  state = {
    email: "",
    password: "",
    firstNameKid: "",
    secondNameKid: "",
    group: ""
  };

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
    return (
      <div className="register" ref={this.props.containerRef}>
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
              <select name="kindergagrouprdengroup" form="register__form">
                <option value="A">A</option>
                <option value="B">B</option>
                onChange=
                {event => {
                  this.setState({ group: event.target.value });
                }}
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
      </div>
    );
  }
}
