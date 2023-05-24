import React from "react";
import Slider from "react-slick";
import "../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../Resources/car-rover.png";
import img2 from "../Resources/car-bmw.png";
import img3 from "../Resources/car-jeep.png";

function Carosoul() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "15%",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "20%",
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "10%",
        },
      },
    ],
  };

  return (
    <div>
      <div>
        <Slider {...settings}>
          <div className="image-container">
            <img src={img} alt="Slide 1" />
          </div>
          <div className="image-container">
            <img src={img2} alt="Slide 2" />
          </div>
          <div className="image-container">
            <img src={img3} alt="Slide 3" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Carosoul;
