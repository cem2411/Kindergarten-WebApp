import React, { useState } from "react";

export default function UserEntry({ user, onSave, onDelete }) {
  const [isEditMode, setEditMode] = useState();
  const [firstNameKid, setFirstNameKid] = useState(user.firstNameKid);
  const [secondNameKid, setSecondNameKid] = useState(user.secondNameKid);
  const [group, setGroup] = useState(user.group);
  const [email, setEmail] = useState(user.email);

  const startEditMode = () => {
    setFirstNameKid(user.firstNameKid);
    setSecondNameKid(user.secondNameKid);
    setGroup(user.group);
    setEmail(user.email);
    setEditMode(true);
  };

  const save = () => {
    user.firstNameKid = firstNameKid;
    user.secondNameKid = secondNameKid;
    user.group = group;
    user.email = email;
    onSave(user);
    setEditMode(false);
  };
  return isEditMode ? (
    <tr key={user._id}>
      <td>
        <input
          id={"firstNameKid"}
          name={"firstNameKid"}
          type="text"
          onChange={event => setFirstNameKid(event.target.value)}
          value={firstNameKid}
        />
      </td>
      <td>
        <input
          id={"setSecondNameKid"}
          name={"setSecondNameKid"}
          type="text"
          onChange={event => setSecondNameKid(event.target.value)}
          value={secondNameKid}
        />
      </td>
      <td>
        <select
          id="group"
          name="group"
          form="register__form"
          value={group}
          onChange={event => setGroup(event.target.value)}
        >
          <option value="A">A</option>
          <option value="B">B</option>
        </select>
      </td>
      <td>
        <input
          id={"email"}
          name={"email"}
          type="email"
          onChange={event => setEmail(event.target.value)}
          value={email}
        />
      </td>
      <td style={{ textAlign: "center" }}>
        <button className="register__footer__button" onClick={save}>
          Speichern
        </button>
        <button
          value={user._id}
          onClick={() => setEditMode(false)}
          className="btn btn-danger delete-button"
        >
          Abbrechen
        </button>
      </td>
    </tr>
  ) : (
    <tr key={user._id}>
      <td>{user.firstNameKid}</td>
      <td>{user.secondNameKid}</td>
      <td>{user.group}</td>
      <td>
        <a href={`mailto:${user.email}`}>{user.email}</a>
      </td>
      <td style={{ textAlign: "center" }}>
        <button
          value={user._id}
          className="btn btn-warning"
          onClick={startEditMode}
        >
          Editieren
        </button>
        <button
          value={user._id}
          onClick={onDelete}
          className="btn btn-danger delete-button"
        >
          Löschen
        </button>
      </td>
    </tr>
  );
}
