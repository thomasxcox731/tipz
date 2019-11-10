import React from "react";
import { Link } from "react-router-dom";


function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          Mileage
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/blog"
          className={window.location.pathname === "/blog" ? "nav-link active" : "nav-link"}
        >
          Tips
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Account
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
