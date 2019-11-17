import React from "react";
import { Link } from "react-router-dom";
import './NavTabs.css'


function NavTabs() {
  return (
    <div id="container">
      <Link
          to="/"
          className={window.location.pathname === "/account" ? "nav-link active" : "nav-link"}
        ><img id="logo" alt="logo" src='Hexel1.gif' />
        </Link>
    <ul className="nav nav-tabs bg-white">
            <li className="nav-item">
        
        <br />
      </li>
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        {/* <Link
          to="/mileage"
          className={window.location.pathname === "/mileage" ? "nav-link active" : "nav-link"}
        >
          Tripz
        </Link> */}
      </li>
      <li className="nav-item">
        <Link
          to="/tips"
          className={window.location.pathname === "/tips" ? "nav-link active" : "nav-link"}
        >
          Tipz and Tripz
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
    </div>
  );
}

export default NavTabs;
