import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const BlogList: React.FC = () => {
  const { blogs, likeBlog } = useContext(BlogContext)!;

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <button onClick={() => likeBlog(blog._id)}>
            Like ({blog.likes})
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
