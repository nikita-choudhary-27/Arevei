import React from "react";
import brand from "../assets/brand.png";


const WorkShowcase: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center w-full pb-20 gap-10 px-4 sm:px-8 dark:bg-[#1c1c1c] dark:text-white">
      <h3 className="dark:text-gray-400 font-medium text-lg leading-8">
        Brands We've <br /> Worked with
      </h3>

      <img
        src={brand}
        alt="w1"
        className="w-3/4 sm:w-1/3 md:w-1/6 max-w-full h-auto rounded-lg shadow-lg"
      />
      <img
        src={brand}
        alt="w1"
        className="w-3/4 sm:w-1/3 md:w-1/6 max-w-full h-auto rounded-lg shadow-lg"
      />
      <img
        src={brand}
        alt="w1"
        className="w-3/4 sm:w-1/3 md:w-1/6 max-w-full h-auto rounded-lg shadow-lg"
      />
      <img
        src={brand}
        alt="w1"
        className="w-3/4 sm:w-1/3 md:w-1/6 max-w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  );
};

export default WorkShowcase;
