import React from "react";
import ce from "../assets/team/ce.png";
import cl from "../assets/team/cl.png";
import man from "../assets/team/man.png";
import data from "../assets/team/data.png";
import dev1 from "../assets/team/dev1.png";
import dev2 from "../assets/team/dev2.png";
import founder from "../assets/team/founder.png";
import market from "../assets/team/market.png";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  tag: string;
}

const teamMembers: TeamMember[] = [
  { name: "John Doe", position: "Founder", image: founder, tag: "John" },
  { name: "Ryan Smith", position: "Chief Executive", image: ce, tag: "Ryan" },
  { name: "Darren Young", position: "Manager", image: man, tag: "Darren" },
  { name: "Sami Adnan", position: "Creative Lead", image: cl, tag: "Sami" },
  { name: "Steve Gerrard", position: "Data Analyst", image: data, tag: "Steve" },
  { name: "Daniel Cole", position: "Marketing Head", image: market, tag: "Dani" },
  { name: "Didier James", position: "Developer", image: dev1, tag: "James" },
  { name: "Rafael Diaz", position: "Developer", image: dev2, tag: "Rafa" },
];

const TeamMembers: React.FC = () => {
  return (
    <div className="bg-black">
      <div className="max-w-6xl mx-auto py-16 px-6 text-white bg-black">
        <h1 className="text-4xl font-bold pb-6">
          Meet the Minds <br /> Behind AREVEI.
        </h1>
        <p className="text-gray-400 pb-12">
          Discover how we can elevate your brand and drive measurable results.
          We specialize in <br />
          crafting unique brand experiences that resonate with your audience.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div className="flex flex-col gap-3  ">
              <div
                key={index}
                className="relative bg-[#1c1c1c] rounded-2xl  shadow-lg text-center flex-col gap-4"
              >
                <div>
                  <div className="relative w-full h-64 rounded-xl p-3 pb-4  ">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-xl relative"
                    />
                    <h2 className="absolute left-3 top-[220px] text-lg font-light mb-3">
                      {member.position}
                    </h2>
                    <span className="absolute top-2 left-2  bg-lime-500 text-black px-2 py-1 text-sm font-semibold rounded-lg">
                      {member.tag}
                    </span>
                  </div>
                </div>
              </div>
              <div className="">
                <button className="bg-[#1c1c1c] text-white font-medium text-lg rounded-xl p-3 w-full">
                  {member.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
