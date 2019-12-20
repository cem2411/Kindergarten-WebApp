import React, { Component } from "react";
import axios from "../../../services/GlobalAxiosSettings";

export class ListChildren extends Component {
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
      .get("/accounts")
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
    const users = this.state.users.map(user => (
      <tr key={user._id}>
        <td>{user.firstNameKid}</td>
        <td>{user.secondNameKid}</td>
        <td>{user.group}</td>
        <td>{user.email}</td>
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
          <h2>Liste aller Kinder</h2>

          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Vorname</th>
                <th>Nachname</th>
                <th>Gruppe</th>
                <th>Email</th>
              </tr>
            </thead>

            <tbody>{users}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
