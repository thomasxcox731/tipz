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
          to="/mileage"
          className={window.location.pathname === "/mileage" ? "nav-link active" : "nav-link"}
        >
          Mileage
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/tips"
          className={window.location.pathname === "/tips" ? "nav-link active" : "nav-link"}
        >
          Tips
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/account"
          className={window.location.pathname === "/account" ? "nav-link active" : "nav-link"}
        >
          Account
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
