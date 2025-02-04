import React, { useState } from "react";
import { motion } from "framer-motion";
import image from "../assets/blog/image.png";
import copilot from "../assets/blog/copilot.png";
import add from "../assets/blog/add.png";
import photo from "../assets/blog/photo.png";

const categories = [
  "Latest",
  "Popular",
  "Following",
  "Science",
  "Technology",
  "Food",
  "Quote",
];

const posts = Array(8).fill({
  title: "Artificial Intelligence is on the field!",
  author: "John Doe",
  date: "Monday, 23 Jan",
  likes: "428k",
  comments: "122k",
  img: image,
});

const PageLayout: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Latest");

  return (
    <div className="bg-black text-white min-h-screen p-4 md:p-10">
      {/* Header Section */}
      <h1 className="text-4xl font-bold mb-4">Top Picks From This Week</h1>

      {/* Category Tags */}
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.1 }}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              activeCategory === category
                ? "border-lime-400 text-lime-400"
                : "border-gray-400 text-gray-400"
            } border transition-all`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Section */}
        <div className="lg:col-span-2">
          {posts.map((post, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="flex items-start bg-black p-4 rounded-xl mb-6 hover:shadow-xl transition-shadow"
            >
              <img
                src={post.img}
                alt="Post thumbnail"
                className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl mr-4"
              />
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-1">{post.title}</h2>
                <p className="text-sm text-gray-400 mb-2">
                  {post.author} • {post.date}
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{post.likes} Likes</span>
                  <span>{post.comments} Comments</span>
                  <button className="text-gray-300 hover:text-white">
                    Save
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sidebar Section */}
        <div className="space-y-8">
          {/* Advertisement Card */}
          <div className="rounded-xl text-center relative">
            <img src={copilot} alt="" className="w-full rounded-xl" />
            <div className="bg-lime-400 text-black font-semibold p-3 rounded-2xl absolute z-10 right-2 bottom-3">
              AD
            </div>
          </div>

          {/* Trending Tags */}
          <div className="bg-[#1f1f1f] p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Trending Tags</h3>
            <ul className="space-y-2">
              {categories.map((tag) => (
                <li
                  key={tag}
                  className="text-gray-400 hover:text-white cursor-pointer"
                  onClick={() => setActiveCategory(tag)}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* Leaderboard */}
          <div className="bg-[#1f1f1f] p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Leaderboard</h3>
            <ul className="space-y-2">
              {posts.slice(0, 5).map((post, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-gray-400 hover:text-white"
                >
                  <img
                    src={photo}
                    alt=""
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  {post.author} - Top {index + 1}
                </li>
              ))}
            </ul>
          </div>

          {/* Another Ad */}
          <div className="rounded-xl text-center relative">
            <img src={add} alt="" className="w-full rounded-xl" />
            <div className="bg-lime-400 text-black font-semibold p-3 rounded-2xl absolute z-10 right-2 bottom-3">
              AD
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
