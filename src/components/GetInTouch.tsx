import React from "react";
import image from "../assets/contact/image.png";

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  buttonText,
  onClick,
}) => {
  return (
    <div className="border rounded-2xl p-6 w-80 h-full pb-10 shadow-md dark:bg-[#222222]">
      <div className="w-12 h-12 p-3 bg-black rounded-full mb-4">
        <img src={image} alt="" />
      </div>
      <h2 className="text-2xl font-semibold mb-6 dark:text-white">{title}</h2>
      <p className="text-gray-600 mb-7 dark:text-gray-400">{description}</p>
      <button
        className="py-2 w-40 text-black border border-black rounded-full hover:bg-gray-100 dark:text-white dark:bg-[#222222] dark:border dark:border-white dark:hover:bg-white dark:hover:text-black transition-colors duration-600"
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

const GetInTouch: React.FC = () => {
  return (
    <div className="py-10 px-4 dark:bg-[#1c1c1c]">
      <h1 className="text-center text-3xl font-bold mb-4 dark:text-white">
        Get in Touch
      </h1>
      <p className="text-center font-light text-gray-600 mb-8 dark:text-gray-400">
        We're a full-service{" "}
        <strong className="dark:text-lime-500">
          branding and marketing agency
        </strong>{" "}
        that helps businesses thrive.
      </p>
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:justify-center md:justify-center">
        <Card
          title="Contact Support"
          description="We leverage the power of PPC to drive qualified leads and boost your sales. Our data-driven approach ensures that."
          buttonText="Get Help"
          onClick={() => alert("Contact Support clicked!")}
        />
        <Card
          title="Visit our HQ"
          description="Boost Conversions with Data-Driven CRO. Increase website conversions through A/B testing, UX optimization, and data analysis."
          buttonText="View Location"
          onClick={() => alert("Visit our HQ clicked!")}
        />
        <Card
          title="Contact to Sales"
          description="Our Google Ads specialists will help you create compelling campaigns that appear at the top of search results and visibility."
          buttonText="Contact"
          onClick={() => alert("Contact to Sales clicked!")}
        />
      </div>
    </div>
  );
};

export default GetInTouch;
