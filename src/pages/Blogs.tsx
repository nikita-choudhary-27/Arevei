import React from "react";
import { motion } from "framer-motion";
import header from "../assets/blog/header.png";
import PageLayout from "./PageLayout";

const Blogs: React.FC = () => {
  return (
    <div className="bg-black w-full flex flex-col items-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen max-w-full bg-gradient-to-r from-blue-300 to-red-300 px-8 md:px-24 py-12">
        {/* Heading Section */}
        <motion.div
          className="text-center md:text-left flex flex-col md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4 leading-tight">
            A Platform for Creators
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-6">
            Share insights, grow your audience, and monetize your passion.
          </p>
          <motion.input
            type="text"
            className="p-3 rounded-xl border border-gray-300 focus:ring-2 w-3/4 focus:ring-blue-500 outline-none"
            placeholder="Write what's on your mind"
            whileFocus={{ scale: 1.05 }}
          />
          <motion.button
            className="text-black w-1/4 font-semibold bg-lime-400 rounded-full my-4 px-6 py-3 shadow-md hover:bg-lime-500 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Write
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={header}
            alt="Header"
            className="w-full max-w-md md:max-w-lg object-cover drop-shadow-lg"
          />
        </motion.div>
      </div>

      <PageLayout/>
    </div>
  );
};

export default Blogs;
