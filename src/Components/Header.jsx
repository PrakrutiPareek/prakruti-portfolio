import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/projects">Projects</Link>
    </div>
  );
}

export default Header;
