import React, { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/features/reducer";
import { setPostData } from "../../store/features/reducer/postReducer";

const Posts = () => {
  //   const [posts, setPosts] = useState();
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
  //     setPosts(res.data);
  //   });

  const [posts, setPosts] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <React.Fragment>
      <div className="relative flex flex-col items-center justify-center mx-auto w-[98%] shadow-md rounded-md mt-1  text-black ">
        <h1 className="text-xl font-bold mt-5">Posts</h1>
        {posts &&
          posts.length &&
          posts.map((post) => (
            <div
              key={post.id}
              className="relative flex flex-col items-center justify-center mx-auto w-[80%] shadow-md rounded-md mt-3 bg-black p-4 text-white "
            >
              <img
                className="h-48"
                src="https://cdn.pixabay.com/photo/2021/03/11/22/35/earth-6088258_1280.png"
              />
              <span>{post.title}</span>
              <span className="mb-4">{post.body}</span>
              <p>{post.id}</p>

              <div className=" absolute w-[100%] flex justify-between top-0  p-4">
                <p>
                  <FcLike className="cursor-pointer" />
                </p>
                <AiFillLike className="text-blue-500 cursor-pointer" />
              </div>
              <div className=" absolute w-[100%] flex justify-between items-center bottom-0 p-4">
                <p>
                  <BiEdit className="text-green-500 cursor-pointer" />
                </p>
                <Link to={`/postsdetails/${post.id}`}>
                  <button
                    onClick={() => dispatch(setPostData(post))}
                    className="text-md bg-white text-black px-2 py-1 rounded-md shadow-md font-bold mt-5 cursor-pointer"
                  >
                    Post Details...
                  </button>
                </Link>
                <p>
                  <MdDelete className="text-red-600 cursor-pointer" />
                </p>
              </div>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
};

export default Posts;
