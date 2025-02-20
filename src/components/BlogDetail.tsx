// BlogDetail.tsx
import React, { useContext, useState } from 'react';
import { BlogContext } from '../context/BlogContext';

interface BlogDetailProps {
  blogId: string;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blogId }) => {
  const { blogs, addComment } = useContext(BlogContext)!;
  const blog = blogs.find((b) => b._id === blogId);
  const [comment, setComment] = useState("");

  if (!blog) return <div>Blog not found</div>;

  const handleCommentSubmit = () => {
    addComment(blog._id, "User", comment);
    setComment("");
  };

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <div>
        <h3>Comments</h3>
        {blog.comments.map((c, index) => (
          <div key={index}>
            <p>
              {c.user}: {c.content}
            </p>
          </div>
        ))}
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleCommentSubmit}>Add Comment</button>
      </div>
    </div>
  );
};
export default BlogDetail;