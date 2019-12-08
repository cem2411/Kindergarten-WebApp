import React, { Component } from "react";
import axios from "../../../services/GlobalAxiosSettings";

export class Aabsence extends Component {
  state = {
    dates: [],
    dateStart: "",
    dateEnd: ""
  };

  resetState = () => {
    this.setState({
      dates: [],
      dateStart: "",
      dateEnd: ""
    });
  };
  componentDidMount() {
    axios
      .get("/absence")
      .then(response => {
        this.setState({
          dates: response.data
        });
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const dates = this.state.dates.map(date => (
      <tr key={date._id}>
        <td>{date.dateStart}</td>
        <td>{date.dateEnd}</td>
      </tr>
    ));

    return (
      <div className="main-container">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
        </head>

        <div class="table">
          <h2>Liste der Abwesenheiten</h2>

          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Von</th>
                <th>Bis</th>
              </tr>
            </thead>

            <tbody>{dates}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
