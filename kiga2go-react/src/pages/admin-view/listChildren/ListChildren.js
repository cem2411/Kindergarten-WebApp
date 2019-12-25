import React, { Component } from "react";
import axios from "../../../services/GlobalAxiosSettings";

export default class ListChildren extends Component {
  state = {
    users: [],
    email: "",
    password: "",
    firstNameKid: "",
    secondNameKid: "",
    group: "A",
    search: "",
    searchList: []
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
          users: response.data,
          searchList: response.data
        });
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  shouldComponentUpdate()
  componentDidUpdate(prevState){

    if(prevState.searchList !== this.state.searchList){
      let filteredUsers = this.state.users.filter(user => {
        return user.firstNameKid.toLowerCase().includes(this.state.search.toLowerCase())
      })
      this.setState({searchList: filteredUsers})

    }
   
    
  }

  InputChangeHandler = (e) => {
    console.log("value changed to:", e.target.value)
    this.setState({
      search: e.target.value
    })
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
        <input type="text" value={this.state.search} onChange={this.InputChangeHandler} />
        <div className="table">
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
