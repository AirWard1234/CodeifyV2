import React from "react";
import "../Home/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Codeify</h1>
      </div>
      <div className="selection">
        <div className="about">
          <h1>About</h1>
        </div>
        <div className="contact">
          <h1>Contact</h1>
        </div>
      </div>
      <div className="CTA">
        <Link to={"/code"}>
          <button type="button">CODE!</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
