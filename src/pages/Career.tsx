  import React from "react";
  import { motion } from "framer-motion";
  import career from "../assets/career/image.png";
  import product from "../assets/career/product.png";
  import data from "../assets/career/data.png";
  import full from "../assets/career/full.png";
  import sales from "../assets/career/sales.png";
  import market from "../assets/career/market.png";
  import branding from "../assets/career/branding.png";

  interface Job {
    title: string;
    description: string;
    tags: string[];
    image: string;
  }

  const jobListings: Job[] = [
    {
      title: "Product Designer",
      description:
        "Conceptualize and design user-centered digital products. Strong UX/UI skills needed.",
      tags: ["Product Design", "Design Thinking", "UI/UX"],
      image: product,
    },
    {
      title: "Marketing Specialist",
      description:
        "Develop and execute marketing campaigns to increase business growth.",
      tags: ["Marketing", "Campaigns", "Strategy Analysis"],
      image: market,
    },
    {
      title: "Branding Expert",
      description:
        "Develop and implement branding strategies to enhance brand identity and brand equity.",
      tags: ["Visual Identity", "Story Telling", "Branding"],
      image: branding,
    },
    {
      title: "Data Analyst",
      description:
        "Analyze large datasets to identify trends, draw insights, and make business decisions.",
      tags: ["Data Science", "Statistics", "Database"],
      image: data,
    },
    {
      title: "Sales Representative",
      description:
        "Build and maintain relationships with clients, identify and close opportunities.",
      tags: ["CRM", "Business Management", "Lead"],
      image: sales,
    },
    {
      title: "Full-Stack Developer",
      description:
        "Develop, test, and maintain high-quality software applications.",
      tags: ["Javascript", "Node JS", "Deployment"],
      image: full,
    },
  ];

  interface JobCardProps {
    title: string;
    description: string;
    tags: string[];
    image: string;
  }

  const JobCard: React.FC<JobCardProps> = ({
    title,
    description,
    tags,
    image,
  }) => {
    return (
      <motion.div
        className="relative rounded-xl overflow-hidden shadow-lg group"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative h-auto overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover brightness-110 group-hover:brightness-125 transition duration-300"
          />
          <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-40 transition duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-sm text-gray-300 mt-2">{description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-white border border-white px-3 py-1.5 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button className="mt-4 w-1/2 text-lime-400 py-2 rounded-full border border-lime-400 font-semibold hover:bg-lime-500 hover:text-black">
              View Job
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  const Career: React.FC = () => {
    return (
      <div className="bg-black">
        <div className="bg-[#111a07] text-white min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 text-center">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black opacity-10 pointer-events-none"></div>
          <div className="absolute inset-0 w-full h-full grid grid-cols-12 grid-rows-9 pointer-events-none">
            {Array.from({ length: 12 * 9 }).map((_, i) => (
              <div key={i} className="border border-gray-600 opacity-20"></div>
            ))}
          </div>

          <motion.div
            className="flex flex-col items-center justify-center relative"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mt-32">
              Join the AREVEI Team
            </h1>
            <p className="mt-10 mb-8 text-lg md:text-2xl max-w-2xl">
              Discover how we can elevate your brand and drive measurable results.
              We specialize in crafting unique brand experiences that resonate
              with your audience.
            </p>
            <button className="bg-lime-400 text-black font-semibold py-3 px-6 mb-20 rounded-full hover:bg-lime-500">
              View Job Opportunities
            </button>
            <img
              src={career}
              className="z-10 w-4/5 max-w-full mx-auto mb-8"
              alt="Career"
            />
          </motion.div>
        </div>
        <div className="flex flex-col px-44 mt-10 pb-20">
          <h2 className="text-4xl text-white mb-5 font-bold pt-4">
            View Our Open <br />
            Job Opportunities.
          </h2>
          <p className="text-gray-400">
            Join a team of innovators and shape the future with us. Explore
            exciting career <br /> opportunities at AREVEI and discover your
            potential.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {jobListings.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default Career;
