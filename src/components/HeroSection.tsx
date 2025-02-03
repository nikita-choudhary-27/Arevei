import React from "react";
import WorkShowcase from "./WorkShowcase";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-white-50 text-center pt-44  dark:bg-[#1c1c1c] dark:text-white">
      <h1 className="text-5xl font-bold mb-6">
        All-in-One Platform for <br />{" "}
        <span className="text-lime-400">Your Business</span>
      </h1>
      <p className="text-gray-600 text-xl font-normal max-w-2xl leading-7 mx-auto mb-6 dark:text-gray-400">
        Discover how we can elevate your brand and drive measurable results. We
        specialize in crafting unique brand experiences.
      </p>
      <div className="flex justify-center space-x-4 mb-36">
        <button className="bg-lime-500 text-black py-2 px-6 font-semibold rounded-full hover:bg-lime-600">
          Be a Creator
        </button>
        <button className="border border-lime-400 dark:text-lime-400  py-2 px-6 rounded-full dark:hover:bg-lime-400  dark:hover:text-black ">
          Our Story
        </button>
      </div>
      <WorkShowcase/>

      <div className="dark:bg-black p-10 mt-20 w-full">
        <h2 className="text-3xl mt-5 text-gray-400 font-semibold">
          <span className="text-white"> A full-service digital studio</span>{" "}
          that helps <br /> businesses build a strong online presence.
        </h2>
        <button className="border my-8 border-lime-400 dark:text-lime-400  py-2 px-6 rounded-full dark:hover:bg-lime-400  dark:hover:text-black ">
          Our Story
        </button>
        <div className="mt-10">
          <h2 className="text-4xl  font-semibold">Explore Our Solutions.</h2>
          <p className="text-gray-400  text-lg mt-3 mb-6">
            Discover how we can elevate your brand and drive measurable <br />results.
            We specialize in crafting unique brand experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
