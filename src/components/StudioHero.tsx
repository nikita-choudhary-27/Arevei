import React from "react";

const StudioHero: React.FC = () => {
  return (
    <div className="bg-white-50 text-center py-20 px-4 dark:bg-[#1c1c1c] dark:text-white">
      <h1 className="text-5xl font-bold mb-6">Your Partner in Growth</h1>
      <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto mb-6 dark:text-gray-400">
        <strong className=" dark:text-lime-500">
          Discover how we can elevate your brand
        </strong>{" "}
        and drive measurable results. We specialize in crafting unique brand
        experiences that resonate with your audience.
      </p>
      <div className="flex justify-center space-x-4">
        <button className="bg-lime-500 text-black py-2 px-6 rounded-full hover:bg-lime-600">
          Get a Quote
        </button>
        <button className="bg-gray-100 py-2 px-6 rounded-full hover:bg-gray-300 dark:bg-white dark:text-black dark:hover:bg-slate-100">
          Our Pricing
        </button>
      </div>
    </div>
  );
};

export default StudioHero;
