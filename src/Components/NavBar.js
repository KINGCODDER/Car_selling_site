import React, { useState } from "react";
import { motion } from "framer-motion";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import CarRentalRoundedIcon from "@mui/icons-material/CarRentalRounded";

function NavBar() {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <div>
      {window.innerWidth > 768 && (
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
      )}
      {window.innerWidth <= 768 && (
        <BottomNavigation
          value={selectedPage}
          onChange={(event, newValue) => {
            setSelectedPage(newValue);
          }}
        >
          <BottomNavigationAction
            label="Home"
            value="home"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            label="Buy"
            value="buy"
            icon={<PaidRoundedIcon />}
          />
          <BottomNavigationAction
            label="Rent"
            value="rent"
            icon={<CarRentalRoundedIcon />}
          />
          <BottomNavigationAction
            label="Account"
            value="account"
            icon={<AccountCircleIcon />}
          />
        </BottomNavigation>
      )}
    </div>
  );
}

export default NavBar;
