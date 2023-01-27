import React, { useState } from "react";

const UserForm = ({ user, onFormChange }) => {
  //   const [newUser, setNewUser] = useState(user);
  console.log(user);
  const onChangeData = (value, key) => {
    const updatedValue = { ...user, [key]: value };
    onFormChange(updatedValue);
  };

  return (
    <div>
      {user && (
        <div className="flex flex-col   h-20 w-60 mx-8 mt-5">
          <input
            placeholder="Name"
            className="h-6 mt-2 shadow-md rounded-lg p-2"
            onChange={(e) => onChangeData(e.target.value, "name")}
          />
          <input
            placeholder="Age"
            className="h-6 mt-2 shadow-md rounded-lg p-2"
            onChange={(e) => onChangeData(e.target.value, "age")}
          />
          <input
            placeholder="E-mail"
            className="h-6 mt-2 shadow-md rounded-lg p-2"
            onChange={(e) => onChangeData(e.target.value, "email")}
          />
        </div>
      )}
    </div>
  );
};

export default UserForm;
