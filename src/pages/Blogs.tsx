import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import header from "../assets/blog/header.png";
import PageLayout from "./PageLayout";

const Blogs: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // Toggle function for the form
  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const res = await axios.post(
        `${backendUrl}/api/blogs`,
        { title, content, author },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 201 || res.status === 200) {
        toast.success("Blog created successfully!");
        setTitle("");
        setContent("");
        setAuthor("");
        toggleForm(); // Close the form
      } else {
        toast.error("Failed to create blog. Please try again.");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

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
            onClick={toggleForm}
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

      {/* Collapsible Form with Animation */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8 w-11/12 md:w-1/2"
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "-100vh" }}
              transition={{ type: "spring", stiffness: 75 }}
            >
              <h2 className="text-2xl font-bold mb-4">Create a New Blog</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Author Name"
                  className="w-full p-3 mb-4 border rounded-lg"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Blog Title"
                  className="w-full p-3 mb-4 border rounded-lg"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Blog Content"
                  className="w-full p-3 mb-4 border rounded-lg h-32"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />

                <div className="flex justify-end space-x-4">
                  <motion.button
                    className="bg-red-500 text-white rounded-lg px-6 py-2"
                    type="button"
                    onClick={toggleForm}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    className="bg-blue-500 text-white rounded-lg px-6 py-2"
                    type="submit"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Submit
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <PageLayout />

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Blogs;
