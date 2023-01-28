import React from "react";
import PostDetails from "../posts/postDetails";
import { FcLike } from "react-icons/fc";
import { BsFillCartFill } from "react-icons/bs";
const Cart = () => {
  return (
    <>
      <h1 className=" flex justify-center items-center text-3xl font-bold">
        Cart
      </h1>
      <div className="relative flex bg-slate-200 shadow-lg w-[90%] mt-3 p-5 rounded-md mx-auto">
        <div className="w[60%] h-24 shadow-md bg-white">
          <h1 className=" flex justify-center items-center text-3xl font-bold p-2">
            Your Cart is Empty !
          </h1>
        </div>
        <div className="absolute top-2 right-2">
          <button>
            <FcLike className="text-3xl" />
          </button>
        </div>
        <div className="absolute bottom-2 right-2">
          <button className="bg-green-600 rounded-md py-1 px-2 text-white flex items-center space-x-2 ">
            Add to Cart
            <span className="px-2">
              <BsFillCartFill />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
