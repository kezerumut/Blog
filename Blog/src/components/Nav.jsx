import React from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
export default function Nav() {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav-bar">
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="logo"
          style={{ width: "50px", height: "50px" }}
        />
        <h1>My Blog</h1>
        <div className="nav-buttons">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/post/1")}>Blog</button>
          <button onClick={() => navigate("/register")}>Register</button>
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
      </div>
    </>
  );
}
