import React from "react";
import intro1 from "../assets/Home/into1.png";
import intro2 from "../assets/Home/intro2.png";
import intro3 from "../assets/Home/intro3.png";
import intro4 from "../assets/Home/intro4.png";


interface SectionProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
  backgroundColor: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  description,
  image,
  imagePosition,
  backgroundColor,
}) => {
  return (
    <div
      className={`px-6 md:px-20 py-12 flex flex-col ${
        imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } gap-10 justify-between items-center ${backgroundColor}`}
    >
      <div className="flex justify-center md:justify-start md:w-1/2">
        <img className="w-full md:w-3/4" src={image} alt="" />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl md:text-4xl text-white leading-9 break-words font-semibold">
          {title} <br />
          <span className="text-gray-400">{subtitle}</span>
        </h1>
        <p className="text-gray-400 text-lg py-4">{description}</p>
        <button className="bg-lime-400 text-black font-semibold py-1 px-4 rounded-full hover:bg-lime-500">
          Let's Go
        </button>
      </div>
    </div>
  );
};


const HomeIntro: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Section
        title="Your Brand Uplifted"
        subtitle="with AREVEI Studio."
        description="Discover how we can elevate your brand and drive measurable results. We specialize in crafting unique brand experiences."
        image={intro1}
        imagePosition="right"
        backgroundColor="bg-[#1f1f1f]"
      />

      <Section
        title="Your Story, Beautifully Told."
        subtitle="Our Blogging Platform"
        description="Discover how we can elevate your brand and drive measurable results. We specialize in crafting unique brand experiences."
        image={intro2}
        imagePosition="left"
        backgroundColor="bg-black"
      />

      <Section
        title="Your Brand Uplifted"
        subtitle="with AREVEI Studio."
        description="Discover how we can elevate your brand and drive measurable results. We specialize in crafting unique brand experiences."
        image={intro3}
        imagePosition="right"
        backgroundColor="bg-[#1f1f1f]"
      />

      <Section
        title="Your Story, Beautifully Told."
        subtitle="Our Blogging Platform"
        description="Discover how we can elevate your brand and drive measurable results. We specialize in crafting unique brand experiences."
        image={intro4}
        imagePosition="left"
        backgroundColor="bg-black"
      />
    </div>
  );
};

export default HomeIntro;
