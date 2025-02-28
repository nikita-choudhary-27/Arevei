import React, { useState, useEffect } from "react";
import { AxiosResponse } from "axios";
import { motion } from "framer-motion";
import axios from "axios";
import image from "../assets/blog/image.png";
import copilot from "../assets/blog/copilot.png";
import add from "../assets/blog/add.png";
import photo from "../assets/blog/photo.png";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
import { toast } from "react-toastify";


const categories = [
  "Latest",
  "Popular",
  "Following",
  "Science",
  "Technology",
  "Food",
  "Quote",
];

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  image?: string;
  likes: number;
  comments: Comment[];
}

interface Comment {
  text: string;
}

const PageLayout: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Latest");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");



  const fetchBlogs = async (): Promise<void> => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${backendUrl}/api/blogs`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBlogs(res.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      toast.error("Failed to fetch blogs. Please try again.");
    }
  };

  const fetchBlogDetails = async (id: string): Promise<void> => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${backendUrl}/api/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSelectedBlog(res.data);
      setComments(res.data.comments);
    } catch (error) {
      console.error("Error fetching blog details:", error);
      toast.error("Failed to load blog details.");
    }
  };

const addComment = async (id: string): Promise<void> => {
  try {
    const token = localStorage.getItem("token");
    await axios.post(
      `${backendUrl}/api/blogs/${id}/comment`,
      { comment: newComment },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setNewComment("");
    fetchBlogDetails(id);
    toast.success("Comment added successfully!");
  } catch (error) {
    console.error("Error adding comment:", error);
    toast.error("Failed to add comment. Please try again.");
  }
};


  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen p-4 md:p-10">
      <h1 className="text-4xl font-bold mb-4">Top Picks From This Week</h1>

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
        <div className="lg:col-span-2">
          {!selectedBlog &&
            blogs.map((blog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cursor-pointer flex items-start bg-black p-4 rounded-xl mb-6 hover:shadow-xl transition-shadow"
                onClick={() => fetchBlogDetails(blog._id)}
              >
                <img
                  src={blog.image || image}
                  alt="Post thumbnail"
                  className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-1">{blog.title}</h2>
                  <p className="text-sm text-gray-400 mb-2">
                    {blog.author} • {new Date(blog.date).toDateString()}
                  </p>
                  <div className="text-sm text-gray-500">
                    <span>
                      {blog.likes} 0 Likes • {blog.comments.length} Comments
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}

          {selectedBlog && (
            <div className="p-4 bg-[#1f1f1f] rounded-xl">
              <h2 className="text-2xl font-bold mb-4">{selectedBlog.title}</h2>
              <p className="mb-4">{selectedBlog.content}</p>

              <h3 className="text-xl font-semibold mb-2">Comments:</h3>
              <ul className="mb-4">
                {comments.map((comment, index) => (
                  <li key={index} className="text-gray-400 mb-2">
                    {comment.text}
                  </li>
                ))}
              </ul>

              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="w-full p-2 rounded mb-2 text-black"
              />
              <button
                onClick={() => addComment(selectedBlog._id)}
                className="bg-lime-400 text-black px-4 py-2 rounded"
              >
                Comment
              </button>
            </div>
          )}
        </div>

        <div className="space-y-8">
          <div className="rounded-xl text-center relative">
            <img src={copilot} alt="" className="w-full rounded-xl" />
            <div className="bg-lime-400 text-black font-semibold p-3 rounded-2xl absolute z-10 right-2 bottom-3">
              AD
            </div>
          </div>

          <div className="bg-[#1f1f1f] p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Leaderboard</h3>
            <ul className="space-y-2">
              {blogs.slice(0, 5).map((blog, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-gray-400 hover:text-white"
                >
                  <img
                    src={photo}
                    alt=""
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  {blog.author}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
