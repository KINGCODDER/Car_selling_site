import React from "react";
import { motion } from "framer-motion";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container-fluid">
          <motion.a
            className="navbar-brand font-type-1"
            whileHover={{
              scale: 1.2,
              rotate: -5,
              transition: { duration: 0.5 },
            }}
            href="/"
          >
            CAR RENTAL
          </motion.a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  How it works?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Car Locations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Pricing
                </a>
              </li>
            </ul>
            <button type="button" className="btn btn-warning btn-navbar">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
