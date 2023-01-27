import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserData from "../form/UserData";
import UserForm from "../form/UserForm";
import { createUser } from "../../store/features/reducer/index";
import { store } from "../../store";

const Dashboard = () => {
  const [user, setUser] = useState();
  const userDetails = { name: "Deepak", age: 24, email: "abc@gmail.com" };
  const onChangeUserDetails = (value, key) => {
    const updatedValue = { ...userDetails, [key]: value };

    setUser(updatedValue);
  };
  useEffect(() => {
    setUser(userDetails);
  }, []);

  const submitData = () => {
    store.dispatch(createUser(user));
  };

  return (
    <React.Fragment>
      <div className="flex flex-col space-y-10">
        <div className="flex space-x-20 justify-center items-center mt-10">
          <UserForm
            user={user}
            onFormChange={(onChangeUserDetails) => setUser(onChangeUserDetails)}
          />
          <UserData
            user={user}
            onFormChange={(onChangeUserDetails) => setUser(onChangeUserDetails)}
          />
        </div>
        <Link
          to="/userDetail"
          className="bg-black text-white py-1 px-3 w-40 mx-auto rounded-md"
        >
          <button onClick={submitData}>Goto Details...</button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
