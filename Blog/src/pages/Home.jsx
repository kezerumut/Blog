import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { blogPosts } from "../data";
import PostCard from "../components/PostCard";
export default function Home() {
  return (
    <div className="home-container">
      <Nav />
      <div>
        <h1>📰 Blog Anasayfası</h1>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {blogPosts.map((post) => (
            <PostCard key={post.id} post={post} content={post.content} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
