import React, { Component } from "react";
import axios from "../../../services/GlobalAxiosSettings";
import "./style.scss";

export default class AbsenceForm extends Component {
  state = {
    dateStart: "",
    dateEnd: ""
  };

  resetState = () => {
    this.setState({
      dateStart: "",
      dateEnd: ""
    });
  };

  dataSendHandler = event => {
    event.preventDefault();
    const dateStart = this.state.dateStart;
    const dateEnd = this.state.dateEnd;

    axios
      .post("/absence", {
        dateStart: dateStart,
        dateEnd: dateEnd
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
    return (
      <div className="absence">
        <form onSubmit={this.dataSendHandler} id="absence__form">
          <div className="absence__header">
            <span>Krankmeldung</span>
          </div>

          <div className="absence__content__form">
            <div className="absence__content__form-group">
              <label htmlFor="email">
                <span>Von: </span>
              </label>
              <input
                type="date"
                name="date"
                value={this.state.dateStart}
                onChange={event => {
                  this.setState({ dateStart: event.target.value });
                }}
              />
            </div>

            <div className="absence__content__form-group">
              <label htmlFor="email">
                <span>Bist: </span>
              </label>
              <input
                type="date"
                name="date"
                value={this.state.dateEnd}
                onChange={event => {
                  this.setState({ dateEnd: event.target.value });
                }}
              />
            </div>
          </div>

          <div className="register__footer">
            <button className="register__footer__button" type="submit">
              Abschicken
            </button>
          </div>
        </form>
      </div>
    );
  }
}
