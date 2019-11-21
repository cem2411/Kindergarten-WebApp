import React, { Component } from "react";
import axios from "../components/restdb/GlobalAxiosSettings";

export class Test extends Component {
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

  dataSendHandler = event => {
    const email = this.state.email;
    const password = this.state.password;

    axios
      .post("/rest/login", {
        email: email,
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
      <div>
        <input
          type="email"
          onChange={event => {
            this.setState({ email: event.target.value });
          }}
        />
        <input
          type="text"
          onChange={event => {
            this.setState({ password: event.target.value });
          }}
        />
        <button onClick={this.dataSendHandler}>Senden</button>

        <div>{users}</div>
      </div>
    );
  }
}
