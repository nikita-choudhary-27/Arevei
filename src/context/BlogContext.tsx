import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
  likes: number;
  comments: { user: string; content: string }[];
}

interface BlogContextProps {
  blogs: Blog[];
  fetchBlogs: () => void;
  likeBlog: (id: string) => void;
  addComment: (id: string, user: string, content: string) => void;
}

export const BlogContext = createContext<BlogContextProps | undefined>(
  undefined
);

export const BlogProvider: React.FC = ({ children }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blogs");
    setBlogs(response.data);
  };

  const likeBlog = async (id: string) => {
    await axios.post(`/api/blogs/${id}/like`);
    fetchBlogs();
  };

  const addComment = async (id: string, user: string, content: string) => {
    await axios.post(`/api/blogs/${id}/comment`, { user, content });
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, fetchBlogs, likeBlog, addComment }}>
      {children}
    </BlogContext.Provider>
  );
};
