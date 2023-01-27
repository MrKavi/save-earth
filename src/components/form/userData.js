import React from "react";

const UserData = ({ user }) => {
  return (
    <div>
      <div>
        {user && (
          <div className="flex flex-col   h-20 w-60 mx-8 mt-5">
            <p className="text-black mt-2 mx-7">{user.name}</p>
            <p className="text-black mt-2 mx-7">{user.age}</p>
            <p className="text-black mt-2 mx-7">{user.email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserData;
