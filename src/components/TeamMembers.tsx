import React from "react";
import ceo from "../assets/team/ceo.png";
import cto from "../assets/team/cto.png";
import manger from "../assets/team/manager.png";
import t1 from "../assets/team/t1.png";
import t2 from "../assets/team/t2.png";
import t3 from "../assets/team/t3.png";
import t4 from "../assets/team/t4.png";
import t5 from "../assets/team/t5.png";

interface TeamMember {
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "John Doe",
    position: "Founder & CEO",
    image: ceo,
  },
  {
    name: "Ryan Smith",
    position: "CTO",
    image: cto,
  },
  {
    name: "Darren Young",
    position: "General Manager",
    image: manger,
  },
  {
    name: "Sami Adnan",
    position: "SEO Specialist",
    image: t1,
  },
  {
    name: "Steve Gerrard",
    position: "Data Analyst",
    image: t2,
  },
  {
    name: "Daniel Cole",
    position: "Marketing Specialist",
    image: t3,
  },
  {
    name: "Didier James",
    position: "Marketing Specialist",
    image: t4,
  },
  {
    name: "Fede Diaz",
    position: "SEO Specialist",
    image: t5,
  },
];

const TeamMembers: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 pb-20 dark:bg-[#1c1c1c] dark:text-white">
      <h1 className="text-4xl font-bold pb-4">Meet Our Talented Team</h1>
      <p className="text-gray-500 pb-8 font-normal">
        <strong className="text-gray-800 dark:text-lime-500">
          Discover how we can elevate your brand
        </strong>{" "}
        and drive measurable results. We specialize in <br /> crafting unique
        brand experiences that resonate with your audience.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-56 sm:w-full mx-auto ">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative bg-white rounded-3xl shadow-lg overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
            <button className="absolute inset-x-0 bottom-0 bg-white bg-opacity-90 text-center py-2 border-t border-gray-200 m-4 rounded-2xl dark:bg-transparent dark:border-0">
              <h2 className="text-lg font-semibold dark:text-white">
                {member.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {member.position}
              </p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
