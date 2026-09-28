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
        <Link to={"/"} >Home</Link>
         <Link to={"/about"}>About</Link>
         <Link to={"/contact"}>Contact</Link>
         <Link to={"/project"}>Project</Link>
        
      </div>

      {/* <button className="cv">↓ &nbsp; Download CV</button> */}
    </nav>
  );
}

export default Navbar;