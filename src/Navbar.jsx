import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">
        Abhirami <span></span>
      </div>

      <div className="links">
        <a href="/" >Home</a>
        <a href="/About">About</a>
        <a href="/Project">Projects</a>
        <a href="/Contact">Contact</a>
      </div>

      {/* <button className="cv">↓ &nbsp; Download CV</button> */}
    </nav>
  );
}

export default Navbar;