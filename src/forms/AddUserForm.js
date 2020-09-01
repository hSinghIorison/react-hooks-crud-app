import React, { useState } from "react";

const AddUserForm = (props) => {
  const initialState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name.toLowerCase()]: value });
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (user.name.length === 0 || user.username.length === 0) {
          return;
        }
        props.addUser(user);

        setUser(initialState);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="Name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="Username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
