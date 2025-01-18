import React, { useState, useEffect } from "react";
import s1 from "../assets/solution/s1.png";
import s2 from "../assets/solution/s2.jpeg";
import s3 from "../assets/solution/s3.jpeg";
import background from "../assets/solution/background.png";
import left from "../assets/creative/left.png";
import right from "../assets/creative/right.png";

const SolutionsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const solutions = [
    {
      id: 1,
      title: "Branding & Logo",
      description:
        "We translate your brand into a compelling and consistent brand experience.",
      image: s1,
      badge: "100+ Happy Projects",
      bg: "bg-white dark:bg-[#222222] dark:text-white",
      textColor: "dark:text-slate-300",
    },
    {
      id: 2,
      title: "SEO",
      description:
        "Data-driven SEO is widely recognized by industry leaders as most effective...",
      image: s2,
      badge: "100+ Happy Projects",
      bg: "bg-lime-300 dark:bg-lime-300 dark:text-black dark:border-black",
      textColor: "dark:text-black",
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

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Set initial state and add event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mb-8">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">
            Solutions You Can Trust
          </h2>
          <p className="text-gray-500 mt-2 max-w-lg">
            <strong className=" dark:text-lime-600">
              Discover how we can elevate your brand
            </strong>{" "}
            and drive measurable results. We specialize in crafting unique brand
            experiences that resonate with your audience.
          </p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="bg-slate-200 p-2 rounded-full disabled:opacity-50 dark:bg-black"
          >
            <img
              src={left}
              alt="Previous"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </button>
          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={currentIndex === solutions.length - 1}
            className="bg-slate-200 p-2 rounded-full disabled:opacity-50 dark:bg-black"
          >
            <img src={right} alt="Next" className="w-8 h-8 md:w-10 md:h-10" />
          </button>
        </div>
      </div>
      {/* Solutions Cards */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row md:flex-wrap md:justify-center gap-6">
        {solutions.map((solution, index) => (
          <div
            key={solution.id}
            className={`${
              isSmallScreen
                ? currentIndex === index
                  ? "block"
                  : "hidden"
                : "block"
            } h-[400px] md:h-[500px] mx-auto md:mx-4 p-6 w-11/12 md:w-[300px] max-w-[70%] rounded-lg shadow hover:shadow-lg transition-shadow relative ${
              solution.bg
            }`}
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <button
              className={`border border-gray-300 rounded-full px-4 py-1 text-gray-700 mb-4 ${solution.bg} dark:bg-[#222222] dark:text-white`}
            >
              {solution.badge}
            </button>
            <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
            <p className={` font-light ${solution.textColor}`}>
  {solution.description}
</p>
<img
  src={solution.image}
  alt={solution.title}
  className="w-72 h-64 px-6  object-cover rounded-2xl absolute bottom-0 left-1/2 transform -translate-x-1/2 pt-7"
/>

          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionsSection;
