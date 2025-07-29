import { useParams } from "react-router-dom";
import { blogPosts } from "../data";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function PostDetail() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  return (
    <div style={{ padding: "20px" }}>
      <Nav />
      <img
        src={post.image}
        alt={post.title}
        style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
      />
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Footer />
    </div>
  );
}
