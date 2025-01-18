import React, { useState } from "react";
import c1 from "../assets/creative/c1.png";
import c2 from "../assets/creative/c2.png";
import c3 from "../assets/creative/c3.png";
import c4 from "../assets/creative/c4.png";
import left from "../assets/creative/left.png";
import right from "../assets/creative/right.png";

const CreativeWorksSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    { id: 1, category: "Branding", title: "Project One", image: c1 },
    { id: 2, category: "SEO", title: "Project Two", image: c2 },
    { id: 3, category: "Meta Marketing", title: "Project Three", image: c3 },
    { id: 4, category: "CRO", title: "Project Four", image: c4 },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const handleNext = () => {
    if (currentIndex < filteredProjects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-custom-gray text-white py-14 dark:bg-[#1c1c1c]">
      {/* Heading with Arrows */}
      <div className="flex flex-wrap items-center justify-between max-w-5xl mx-auto px-4 sm:px-6 mb-8">
        <div className="w-full lg:w-2/3">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Explore Our <br />
            Creative Works
          </h2>
          <p className="text-gray-400 mt-2 max-w-lg text-sm sm:text-base">
            Discover how we can elevate your brand and drive measurable results.
            We specialize in crafting unique brand experiences that resonate
            with your audience.
          </p>
        </div>
        <div className="flex space-x-4 mt-6 lg:mt-0">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="bg-gray-700 p-2 rounded-full disabled:opacity-50"
          >
            <img src={left} alt="Previous" className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === filteredProjects.length - 1}
            className="bg-gray-700 p-2 rounded-full disabled:opacity-50"
          >
            <img src={right} alt="Next" className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
      </div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mb-12 px-4">
        {["All", "Branding", "SEO", "Meta Marketing", "CRO", "PPC"].map(
          (category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm sm:text-base ${
                activeCategory === category
                  ? "bg-green-500 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          )
        )}
      </div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div
          className="flex flex-wrap justify-center items-center transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3 mb-6"
            >
              <div className="w-full h-[300px] sm:h-[280px] rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreativeWorksSection;
