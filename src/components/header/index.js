import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FcLike } from "react-icons/fc";
import { BsFillCartFill } from "react-icons/bs";

const Header = ({ links, openModel }) => {
  console.log("hello", openModel);
  return (
    <div className="relative bg-[#100524] text-white p-2 shadow-md">
      <div className="flex justify-between items-center">
        <img className="w-14" src={logo} />
        <ul className="flex space-x-4 justify-end mx-3 w-full">
          {links &&
            links.length &&
            links.map((elem, index) => (
              <li className="cursor-pointer text-lg font-bold">
                <Link to={`/${elem}`}>{elem}</Link>
              </li>
            ))}
          <div className="flex justify-between items-center space-x-10">
            <button
              className="bg-blue-500 px-2 py-1 rounded-md"
              onClick={openModel}
            >
              Sign up
            </button>
          </div>
        </ul>
        <div className="flex space-x-6 ml-11 mr-3">
          <Link to="likes">
            <div className="flex items-center cursor-pointer">
              <span className="text-[10px] text-white mr-[-21px] -z-0">
                100
              </span>
              <FcLike className="text-3xl text-white" />
            </div>
          </Link>
          <Link to="cart">
            <div className="flex items-center cursor-pointer">
              <span className="text-[13px] text-black mr-[-19px] -z-0">1</span>
              <BsFillCartFill className="text-3xl text-white" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

{
  /* <div className="container flex 100% justify-between items-center bg-gray-900 text-white mx-auto">
        <div>
          <img
            className="w-12"
            src="https://img.freepik.com/free-vector/save-earth-poster_1308-26394.jpg?w=2000"
          />
        </div>
        <ul className="flex space-x-5 text-lg font-bold">
          <Link to="/">
            <li>Home </li>
          </Link>
          <Link to="/">
            <li>About </li>
          </Link>
          <Link to="/article">
            <li>Articles </li>
          </Link>
          <Link to="/">
            <li>Contact us </li>
          </Link>
        </ul>
      </div> */
}
