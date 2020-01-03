import React, { useState, useEffect } from "react";
import axios from "../../../services/GlobalAxiosSettings";
import Loading from "../../../components/loading/Loading";

export default function ListChildren() {
  const [users, setUsers] = useState();
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [selected, setSelected] = useState("all");

  /** Runs first render because of [] */
  useEffect(() => {
    axios
      .get("/accounts")
      .then(response => {
        setUsers(response.data);
        setSearchList(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  /** Runs if SearchWord changes */
  useEffect(() => {
    if (users) {
      setSearchList(checkSelected());
    }
  }, [search]);

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
          return user.group.toLowerCase().includes(search.toLowerCase());
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

  const deleteButtonClickedHandler = e => {
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
  let userRender = searchList.map(user => (
    <tr key={user._id}>
      <td>{user.firstNameKid}</td>
      <td>{user.secondNameKid}</td>
      <td>{user.group}</td>
      <td>{user.email}</td>
      <td style={{ border: "none", textAlign: "center" }}>
        <button
          value={user._id}
          onClick={deleteButtonClickedHandler}
          className="btn btn-danger"
        >
          X
        </button>
      </td>
    </tr>
  ));

  return users ? (
    <div className="main-container">
      <input type="text" value={search} onChange={InputChangeHandler} />
      <label>Suchen Nach:</label>
      <select onChange={selectChangeHandler}>
        <option value="all">Alles</option>
        <option value="groups">Gruppen</option>
        <option value="names">Namen</option>
        <option value="emails">Emails</option>
      </select>
      <div className="table">
        <h2>Liste aller Kinder</h2>

        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Vorname</th>
              <th>Nachname</th>
              <th>Gruppe</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>{userRender}</tbody>
        </table>
      </div>
    </div>
  ) : (
    <Loading />
  );
}
