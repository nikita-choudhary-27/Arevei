import React from "react";
import intro from "../assets/intro.png";
import { Link } from "react-router-dom";

const Intro: React.FC = () => {
  return (
    <div className="bg-custom-gray text-white p-20  flex flex-col md:flex-row gap-8 justify-between items-center dark:bg-[#1c1c1c] dark:text-white">
      <div className="flex flex-col gap-4 max-w-lg">
        <h2 className="font-bold text-4xl">
          A Powerful Agency <br /> with Corporate <br />
          Solutions
        </h2>
        <p className="font-light text-base">
          Discover how we can elevate your brand and drive measurable results.
          We specialize in crafting unique brand experiences that resonate with
          your audience.
        </p>
        <Link to='/about' className="bg-white text-black px-5 py-2 rounded-full max-w-max">
          About Us
        </Link>
      </div>
      <div className="flex justify-center">
        <img src={intro} alt="Intro" className="w-3/4" />
      </div>
    </div>
  );
};

export default Intro;
