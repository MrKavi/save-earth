import React from "react";
import Carousel from "../../carousel";
import home from "../../../assets/home.jpg";
const Home = () => {
  return (
    <div className="relative w-[100%]">
      <img className="w-[100%] h-[88vh] object-cover" src={home} />
      <div className="absolute top-20 left-24">
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
