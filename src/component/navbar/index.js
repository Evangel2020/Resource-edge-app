import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <aside>
        <ul className="right-nav">
          <li className="nav-list">resource edge</li>
          <li>Features</li>
          <li>About</li>
        </ul>
      </aside>
      <aside>
        <ul className="left-nav">
          <li>
            <button className="nav-btn button1">Sign Up</button>
          </li>
          <li>
            <button className="nav-btn button2">Sign In</button>
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
