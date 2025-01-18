import React from "react";
import test from "../assets/test.png";

const TestimonialsSection: React.FC = () => {
  return (
    <div className="bg-custom-gray text-white py-16 px-4 dark:bg-[#1c1c1c]">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-semibold">
          Trusted by World's Fastest <br />
          Evolving Companies!
        </h2>
        <p className="text-gray-400 mt-4">
          Discover how we can elevate your brand and drive measurable <br />
          results. We specialize in crafting unique brand experiences.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-custom-gray p-6 rounded-3xl shadow-lg border border-slate-500 flex flex-col items-center text-center"
          >
            <p className="text-gray-300 italic mb-6">
              "Working with AREVEI has been an absolute game-changer for our
              business. Their team truly understands our brand and has helped us
              to refine our message."
            </p>
            <div className="flex items-center gap-4">
              <img
                src={test}
                alt="John Doe"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">John Doe</h4>
                <p className="text-gray-500 text-sm">
                  General Manager, ABC Inc.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
