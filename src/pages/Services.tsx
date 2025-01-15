import React from "react";
import WorkShowcase from "../components/WorkShowcase";
import SolutionsSection from "../components/SolutionsSection";
import CreativeWorksSection from "../components/CreativeWorksSection";

const Services: React.FC = () => {
  return (
    <div className="text-center min-h-screen dark:bg-[#1c1c1c] px-4 sm:px-8 md:px-16">
      {/* Heading */}
      <h1 className="text-4xl font-semibold pt-20 mb-8 dark:text-white">
        Services We Deliver <br /> Bringing Brands to Life
      </h1>

      {/* Intro Text */}
      <p className="text-gray-500 mb-12 max-w-3xl mx-auto">
        <strong className="dark:text-lime-500">
          We offer a comprehensive suite of branding and marketing services
        </strong>{" "}
        to help businesses <br /> of all sizes achieve their goals.
      </p>

      {/* Sections */}
      <div className="space-y-12">
        <WorkShowcase />
        <SolutionsSection />
        <CreativeWorksSection />
      </div>
    </div>
  );
};

export default Services;
