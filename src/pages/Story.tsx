import React from "react";
import image1 from "../assets/story/image.png";
import banner from "../assets/story/banner.png";
import TeamMembers from "../components/TeamMembers";

const Story: React.FC = () => {
  return (
    <>
      <section className="bg-[#111a07] text-white min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
        {/* Center dark gradient */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black opacity-10 pointer-events-none"></div>

        {/* Grid */}
        <div className="absolute inset-0 w-full h-full grid grid-cols-12 grid-rows-9 pointer-events-none">
          {Array.from({ length: 12 * 9 }).map((_, i) => (
            <div key={i} className="border border-gray-600 opacity-20"></div>
          ))}
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-10 text-center relative">
          Our Journey
        </h2>

        {/* Image grid */}
        <div className="flex gap-4 justify-center items-center relative flex-wrap">
          {["-rotate-12", "-rotate-6", "rotate-6", "rotate-12"].map(
            (rotate, index) => (
              <div
                key={index}
                className={`w-24 h-24 md:w-40 md:h-40 lg:w-60 lg:h-60 bg-cover bg-center rounded-xl transform ${rotate} transition-all duration-300 hover:rotate-0 shadow-lg`}
                style={{ backgroundImage: "url('/image.png')" }}
              ></div>
            )
          )}
        </div>

        {/* Description text */}
        <p className="text-center mt-10 text-lg md:text-2xl max-w-2xl relative">
          <span className="font-bold">A full-service digital studio</span> that
          helps businesses build a strong online presence.
        </p>
      </section>

      <section className="bg-black text-white min-h-screen flex flex-col lg:flex-row items-center justify-center p-8 md:p-16 gap-8">
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={image1}
            alt="Business discussion"
            className="rounded-2xl w-full max-w-md lg:max-w-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            We Help to Build Brands <br />
            <span className="text-gray-400">that Have Solutions.</span>
          </h2>
          <p className="text-gray-300 mt-4 max-w-lg">
            We are a full-service branding agency that helps businesses of all
            sizes build strong, authentic brands that resonate with their target
            audience.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-6">
            {[
              { title: "Projects", value: "145+" },
              { title: "Awards", value: "63+" },
              { title: "Brands", value: "25" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-[#1f1f1f] px-6 py-4 rounded-xl text-center min-w-[160px] shadow-lg"
              >
                <p className="text-gray-400 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#1f1f1f] flex flex-col lg:flex-row items-center justify-evenly p-12 gap-6 text-white text-center lg:text-left">
        <h2 className="text-4xl font-bold">
          We Have a Team That <br />
          <span className="text-gray-400">Never Gets Bored!</span>
        </h2>
        <img className="w-60 md:w-72 lg:w-96 rounded-xl" src={banner} alt="Team Banner" />
      </div>

      <TeamMembers/>
    </>
  );
};

export default Story;
