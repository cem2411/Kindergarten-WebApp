import React, { useState, useEffect } from "react";
import axios from "../../../services/GlobalAxiosSettings";
import UserEntry from "./UserEntry";
import { Spinner } from "react-bootstrap";
import "./style.scss";

export default function ListChildren() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [selected, setSelected] = useState("all");

  const fetchUsers = () => {
    axios
      .get("/accounts")
      .then(response => {
        setUsers(response.data);
        setSearchList(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  /** Runs first render because of [] */
  useEffect(fetchUsers, []);

  /** Runs if SearchWord changes */
  useEffect(() => {
    if (users) {
      setSearchList(checkSelected());
    }
  }, [search, selected]);

  /** Checks for the selected Filter Categorie */
  const checkSelected = () => {
    let filteredUsers = null;

    switch (selected) {
      case "all":
        filteredUsers = users.filter(user => {
          return ""
            .concat(
              user.firstNameKid,
              user.secondNameKid,
              user.group,
              user.email
            )
            .toLowerCase()
            .includes(search.toLowerCase());
        });
        break;
      case "names":
        filteredUsers = users.filter(user => {
          return ""
            .concat(user.firstNameKid, user.secondNameKid)
            .toLowerCase()
            .includes(search.toLowerCase());
        });
        break;
      case "emails":
        filteredUsers = users.filter(user => {
          return user.email.toLowerCase().includes(search.toLowerCase());
        });
        break;
      case "groups":
        filteredUsers = users.filter(user => {
          return user.group.toLowerCase() === search.toLowerCase();
        });
        break;
    }
    return filteredUsers;
  };
  const InputChangeHandler = e => {
    //console.log("value changed to:", e.target.value)
    setSearch(e.target.value);
  };

  const selectChangeHandler = e => {
    // console.log("value changed to ", e.target.value)
    setSelected(e.target.value);
  };

  const deleteUser = e => {
    let filteredUserArray = users.filter(user => {
      return user._id !== e.target.value;
    });
    setSearchList(filteredUserArray);
    handleUserDelete(e.target.value);
  };

  const handleUserDelete = userid => {
    handleAbsenceDelete(userid);

    //deletes user accounts
    axios
      .delete(`/accounts/${userid}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handleAbsenceDelete = userid => {
    let absences = [];

    // fetches absences
    axios
      .get("absence")
      .then(res => {
        absences = [...res.data];

        //checks every absence if users id matches and deletes it
        if (absences.length > 0) {
          for (let i = 0; i < absences.length; i++) {
            if (absences[i].child[0]._id === userid) {
              axios
                .delete("absence/" + absences[i]._id)
                .then(res => {
                  console.log(res);
                })
                .catch(err => {
                  console.log(err);
                });
            }
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  const saveUser = user => {
    axios
      .put("/accounts/" + user._id, user)
      .then(() => fetchUsers())
      .catch(error => {
        console.log(error);
      });
  };
  let userRender =
    searchList.length > 0
      ? searchList.map(user => (
          <UserEntry
            key={user._id}
            user={user}
            onSave={saveUser}
            onDelete={deleteUser}
          />
        ))
      : users.map(user => (
          <UserEntry
            key={user._id}
            user={user}
            onSave={saveUser}
            onDelete={deleteUser}
          />
        ));

  return users ? (
    <div className="main-container">
      <div className="list">
        <div className="list__header">
          <h2 id="test">Liste aller Kinder</h2>
        </div>

        <div className="list__searchbar">
          <div>
            <label for="searchbar">Suchen: </label>
            <input
              id="searchbar"
              type="text"
              value={search}
              onChange={InputChangeHandler}
            />
          </div>

          <div>
            <label for="searchbar-options">Nach: </label>
            <select id="searchbar-options" onChange={selectChangeHandler}>
              <option value="all">Alles</option>
              <option value="groups">Gruppen</option>
              <option value="names">Namen</option>
              <option value="emails">Emails</option>
            </select>
          </div>
        </div>
      </div>

      <div className="table">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Vorname</th>
              <th>Nachname</th>
              <th>Gruppe</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>

          <tbody>{userRender}</tbody>
        </table>
      </div>
    </div>
  ) : (
    <Spinner animation="grow" variant="primary" />
  );
}
