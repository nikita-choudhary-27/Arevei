import React, { useState } from "react";
import s1 from "../assets/solution/s1.png";
import s2 from "../assets/solution/s2.jpeg";
import s3 from "../assets/solution/s3.jpeg";
import background from "../assets/solution/background.png";
import left from "../assets/creative/left.png";
import right from "../assets/creative/right.png";

const SolutionsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const solutions = [
    {
      id: 1,
      title: "Branding & Logo",
      description:
        "We translate your brand into a compelling and consistent brand experience.",
      image: s1,
      badge: "100+ Happy Projects",
      bg: "bg-white dark:bg-[#222222] dark:text-white", // Default background for cards
      textColor: "dark:text-slate-300",
    },
    {
      id: 2,
      title: "SEO",
      description:
        "Data-driven SEO is widely recognized by industry leaders as most effective...",
      image: s2,
      badge: "100+ Happy Projects",
      bg: "bg-lime-300 dark:bg-lime-300 dark:text-black dark:border-black", // Lime green background for SEO card (same for both modes)
      textColor: "dark:text-black", // Ensure text color remains black for SEO card in dark mode
    },
    {
      id: 3,
      title: "Google Ads",
      description:
        "Our Google Ads specialists will help you create the best campaigns...",
      image: s3,
      badge: "100+ Happy Projects",
      bg: "bg-white dark:bg-[#222222] dark:text-white",
      textColor: "dark:text-slate-300",
    },
  ];

  const handleNext = () => {
    if (currentIndex < solutions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-white text-black py-16 px-4 dark:bg-[#1c1c1c] dark:text-white">
      {/* Heading with Arrows */}
      <div className="flex items-center justify-between max-w-6xl mx-auto mb-8">
        <div className="flex flex-col justify-start mb-8">
          <h2 className="text-4xl font-bold ">Solutions You Can Trust</h2>
          <p className="text-gray-500 mt-2 max-w-lg">
            <strong className=" dark:text-lime-600">
              {" "}
              Discover how we can elevate your brand
            </strong>{" "}
            and drive measurable results. We specialize in crafting unique brand
            experiences that resonate with your audience.
          </p>
        </div>
        <div className="flex space-x-4">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="bg-slate-200 p-2 rounded-full disabled:opacity-50 dark:bg-black"
          >
            <img src={left} alt="Previous" className="w-10 h-10" />
          </button>
          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={currentIndex === solutions.length - 1}
            className=" p-2 rounded-full disabled:opacity-50"
          >
            <img src={right} alt="Next" className="w-10 h-10" />
          </button>
        </div>
      </div>
      {/* Solutions Cards */}
      <div className="relative max-w-6xl mx-auto flex flex-wrap justify-center">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 300}px)`,
          }}
        >
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className={`h-[500px] w-auto mx-4 px-6 rounded-lg shadow hover:shadow-lg transition-shadow relative ${solution.bg}`}
              style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <button
                className={`border border-gray-300 rounded-full px-4 py-1 text-gray-700 my-4 ${solution.bg} dark:bg-[#222222] dark:text-white`}
              >
                {solution.badge}
              </button>
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className={`mb-10 font-light ${solution.textColor} `}>
                {solution.description}
              </p>
              <img
                src={solution.image}
                alt={solution.title}
                className="w-96 h-80 object-cover rounded-2xl absolute bottom-0 left-0 px-10 transform "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;
