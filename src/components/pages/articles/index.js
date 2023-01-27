import React from "react";

const Articles = () => {
  return (
    <div className="flex justify-center h-full my-auto, my-5 mx-4 grid grid-cols-2 gap-4 text-center mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-medium">Save Earth</h1>
        <p className="text-base">
          The Earth is a beautiful and unique planet, with a diverse array of
          ecosystems and species that call it home. However, human activities
          have been causing significant damage to the planet and its
          inhabitants. Climate change, pollution, deforestation, and
          overconsumption are just a few of the problems that threaten the
          well-being of the Earth and all its inhabitants
        </p>
      </div>
      <img
        src="https://wallpapercave.com/wp/wp6966654.jpg"
        className="object-cover h-[355px] w-full sm:h-[466px] sm:w-full"
        alt="save earth"
      />
    </div>
  );
};

export default Articles;
