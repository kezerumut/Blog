// src/components/PostCard.jsx
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        margin: "10px",
        width: "300px",
      }}
    >
      <Link
        to={`/post/${post.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img src={post.image} alt={post.title} style={{ width: "100%" }} />
        <h3>{post.title}</h3>
      </Link>
    </div>
  );
}
