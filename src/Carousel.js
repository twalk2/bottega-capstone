import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import alta from "./images/main/alta.jpeg";
import parkCity from "./images/main/park-city.jpeg";
import snowbird from "./images/main/snowbird.jpg";

const Carousel = () => {
  const [imgIndex, setImgIndex] = React.useState(0);
  const carouselImages = [alta, parkCity, snowbird];

  const handlePrevious = () => {
    if (imgIndex === 0) {
      setImgIndex(2);
    } else {
      setImgIndex(imgIndex - 1);
      console.log(imgIndex);
    }
  };

  const handleNext = () => {
    if (imgIndex === 2) {
      setImgIndex(0);
    } else {
      setImgIndex(imgIndex + 1);
      console.log(imgIndex);
    }
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        <img src={carouselImages[imgIndex]}></img>
        <div>
          <button onClick={handlePrevious}>
            <FontAwesomeIcon icon="arrow-circle-left" />
          </button>
          <button onClick={handleNext}>
            <FontAwesomeIcon icon="arrow-circle-right" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
