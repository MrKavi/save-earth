import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const Footer = ({ links }) => {
  return (
    <footer className="flex justify-between  bg-[#070112] text-white py-1 px-4 fixed bottom-0 w-full">
      <div className="w-full flex justify-between items-center mx-8">
        <p className="text-xs">
          Copyright © {new Date().getFullYear()} kv_gasyal
        </p>
        <ul className="flex space-x-4 ">
          {links && links.length && links.map((elem, index) => <li>{elem}</li>)}
        </ul>
        <div className="flex space-x-4 justify-end">
          <BsFacebook />
          <BsInstagram />
          <AiFillTwitterCircle />
          <AiFillYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
{
  /* <p className="text-xs">
          Copyright © {new Date().getFullYear()} kv_gasyal
        </p>
        <div className="flex space-x-4 justify-end">
          <BsFacebook />
          <BsInstagram />
          <AiFillTwitterCircle />
          <AiFillYoutube />
        </div> */
}
