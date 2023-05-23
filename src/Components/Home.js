import React from "react";
import "../Styles/Home.css";
import NavBar from "./NavBar";
import Header from "./Header";
import ScrollAnimation from "react-animate-on-scroll";

function Home() {
  return (
    <div>
      <NavBar />

      <div className="home-body">
        <h1 className="heading font-type-1">
          Rent Your <br /> Dream Car
        </h1>
      </div>

      <Header />
    </div>
  );
}

export default Home;
