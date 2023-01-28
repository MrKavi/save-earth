import React from "react";
import { FcLike } from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const PostDetails = () => {
  const { postData } = useSelector((state) => state.posts);

  console.log(postData);
  return (
    <div className="relative flex flex-col items-center justify-center mx-auto w-72 shadow-md rounded-md mt-3 bg-black p-4 text-white ">
      <h1 className="text-xl font-bold mt-5">PostDetails</h1>
      <img
        className="h-48"
        src="https://cdn.pixabay.com/photo/2021/03/11/22/35/earth-6088258_1280.png"
      />
      <span>{postData?.title}</span>
      <span className="mb-4">{postData?.body}</span>
      <div className=" absolute w-[100%] flex justify-between top-0  p-4">
        <p>
          <FcLike />
        </p>
        <AiFillLike className="text-blue-500" />
      </div>
      <div className=" absolute w-[100%] flex justify-between bottom-0  p-4">
        <p>
          <BiEdit className="text-green-500" />
        </p>
        <p>
          <MdDelete className="text-red-600" />
        </p>
      </div>
    </div>
  );
};

export default PostDetails;
