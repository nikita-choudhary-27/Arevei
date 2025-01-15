import React from "react";
import Intro from "../components/Intro";
import TeamSection from "../components/TeamSection";
import TestimonialsSection from "../components/TestimonialsSection";
import TeamMembers from "../components/TeamMembers";




const About: React.FC = () => {
  return (
    <div className=" min-h-screen dark:bg-[#1c1c1c]">
      <h1 className="text-4xl text-center font-semibold pt-20 pb-14 dark:bg-[#1c1c1c] dark:text-white">
        AREVEI <br /> Your Partner In Growth
      </h1>
      <Intro />
      <TeamSection />
      <TeamMembers />
      <TestimonialsSection />
    </div>
  );
};

export default About;
