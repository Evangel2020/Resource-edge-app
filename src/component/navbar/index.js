import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  localStorage.removeItem("email");

  const [hamburger, setHamburger] = useState(true);
  const handleHamburger = (e) => {
    const dropDown = document.getElementById("dropdown");
    if (hamburger) {
      setHamburger(false);
      dropDown.style.display = "block";
    }
    if (!hamburger) {
      setHamburger(true);
      dropDown.style.display = "none";
    }
  };
  return (
    <nav>
      <div className="asides">
        <img src={`images/image 12.jpg`} />
      </div>
      <div className="asides">
        {hamburger ? (
          <img src={`images/image 44.jpg`} onClick={handleHamburger} />
        ) : (
          <img src={`images/image 45.jpg`} onClick={handleHamburger} />
        )}
      </div>
      <aside className="aside">
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
      <aside className="aside">
        {localStorage.getItem("email") ? (
          <img src={`images/image 46.png`} alt="n-logo" />
        ) : (
          <ul id="leftnav" className="left-nav">
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

      <div id="dropdown">
        <ul>
          <li>Feature</li>
          <li>About</li>
          <li>
            <Link to="login">
              <button className="nav-btn button2">Sign In</button>
            </Link>
          </li>
          <li>
            <Link to="">
              <button className="nav-btn button1">Sign Up</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
