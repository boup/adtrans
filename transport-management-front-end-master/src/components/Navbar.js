import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav
        id="#home"
        className="navbar fixed-top navbar-expand-lg fixed navbar-dark px-5 "
      >
        <a href="#home" className="navbar-brand">
          <h5 className="text-green font-weight-bolder">CITY ADVISER</h5>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="navbar-nav mx-auto text-capitalize">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/mapofsenegal" className="nav-link">
                map of senegal
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/transport" className="nav-link">
                moving around
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/contact" className="nav-link">
                contact
              </Link>
            </li>
          </ul>
          <div className="d-none d-lg-flex align-items-baseline">
            <a href="https://en.wikipedia.org/wiki/Senegal" target="_blank">
              <button className="btn  btn_green btn-lg text-capitalize font-weight-bold">
                senegal
              </button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
