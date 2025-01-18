import React from "react";
import c1 from "../assets/collab/c1.png";
import c2 from "../assets/collab/c2.png";
import c3 from "../assets/collab/c3.png";
import c4 from "../assets/collab/c4.png";

const TeamSection: React.FC = () => {
  return (
    <div className="bg-white py-8 px-6 lg:px-12 pb-20 dark:bg-[#1c1c1c] dark:text-white">
      {/* Container for heading and image */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between mb-12 gap-6">
          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <img
                src={c1}
                alt="Collaborative Team"
                className="rounded-xl w-full object-cover "
              />
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 py-2 px-4 rounded-full shadow border dark:text-white dark:bg-[#1c1c1c] dark:border-white">
                100+ Satisfied Clients
              </div>
            </div>
          </div>
          {/* Text Content Section */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              A Collaborative Team with Creative People!
            </h2>
            <p className="text-gray-600 mt-4 dark:text-slate-400">
              <strong className="dark:text-lime-500">
                Collaborate closely with our experienced and innovative creative
                team
              </strong>{" "}
              to bring your brand story to life. We work together to develop
              unique and impactful solutions.
            </p>
            <div className="mt-8">
              <div className="flex items-start gap-4 mb-6 border rounded-2xl p-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-800">✔</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                    Thoughtful Planning
                  </h4>
                  <p className="text-gray-600 dark:text-slate-400">
                    Every plan our team arranges has a huge impact in the
                    desired outcome and ensures success.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 border rounded-2xl p-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-800">✔</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                    Collaborative Mindsets
                  </h4>
                  <p className="text-gray-600 dark:text-slate-400">
                    A mindset of empathy and collaboration creates a better
                    understanding of client pain points.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Layout for Images */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <img
            src={c2}
            alt="Collaboration 2"
            className="rounded-lg w-1/4 h-40 lg:h-80 object-cover"
          />
          <img
            src={c3}
            alt="Collaboration 3"
            className="rounded-lg w-1/4 h-40 lg:h-80 object-cover"
          />
          <img
            src={c4}
            alt="Collaboration 4"
            className="rounded-lg w-1/4 h-40 lg:h-80 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
