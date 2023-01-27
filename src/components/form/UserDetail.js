import React from "react";
import { useSelector } from "react-redux";
import { store } from "../../store";

const UserDetail = () => {
  const users = useSelector((state) => state.user);
  return (
    <div className="flex flex-col">
      {users &&
        users.length &&
        users.map((user) => (
          <div className="flex bg-black text-white p-4 rounded-md shadow-md  h-20 w-max mx-8 mt-5">
            <p className="text-white mt-2 mx-7">{user.name}</p>
            <p className="text-white mt-2 mx-7">{user.age}</p>
            <p className="text-white mt-2 mx-7">{user.email}</p>
          </div>
        ))}
    </div>
  );
};

export default UserDetail;
