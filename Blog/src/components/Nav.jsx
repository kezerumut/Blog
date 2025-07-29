import React from "react";
import "./Nav.css";
export default function Nav() {
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
          <button>Home</button>
          <button>Blog</button>
          <button>Register</button>
          <button>Login</button>
          <button>Contact</button>
        </div>
      </div>
    </>
  );
}
