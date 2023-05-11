import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Site name
      </a>
      <ul>
        <li className="active">
          <a href="/aboutme">About me</a>
        </li>
        <li>
          <a href="/skills">Skills</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
