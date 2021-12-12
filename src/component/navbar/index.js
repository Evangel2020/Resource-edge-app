import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <aside>
        <ul className="right-nav">
          <Link className="nav-list" to="/">
            <li className="nav-list">resource edge</li>
          </Link>
          {localStorage.getItem("email") ? (
            <>
              <hr /> <li>TM Dashboard</li>
            </>
          ) : (
            <>
              <li>Features</li>
              <li>About</li>
            </>
          )}
        </ul>
      </aside>
      <aside>
        {localStorage.getItem("email") ? (
          <img src={`${process.env.PUBLIC_URL}/images/image 12.jpg`} />
        ) : (
          <ul className="left-nav">
            <li>
              <button className="nav-btn button1">Sign Up</button>
            </li>
            <li>
              <Link to="login">
                <button className="nav-btn button2">Sign In</button>
              </Link>
            </li>
          </ul>
        )}
      </aside>
    </nav>
  );
};

export default Navbar;
