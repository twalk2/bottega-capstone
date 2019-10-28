import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import shred from "./images/main/shred-dude.jpg";
import alta from "./images/main/resort.jpg";
import parkCity from "./images/main/ski-dude.jpg";
import snowbird from "./images/main/night-skiing.jpg";

const Carousel = () => {
  const [imgIndex, setImgIndex] = React.useState(0);
  const carouselImages = [shred, alta, parkCity, snowbird];

  const handlePrevious = () => {
    if (imgIndex === 0) {
      setImgIndex(2);
    } else {
      setImgIndex(imgIndex - 1);
      console.log(imgIndex);
    }
  };

  const handleNext = () => {
    if (imgIndex === 3) {
      setImgIndex(0);
    } else {
      setImgIndex(imgIndex + 1);
      console.log(imgIndex);
    }
  };

  return (
    <div className="carousel-wrapper">
      <img className="carousel-image" src={carouselImages[imgIndex]}></img>
      <button className="left-button" onClick={handlePrevious}>
        <FontAwesomeIcon icon="arrow-circle-left" />
      </button>
      <button className="right-button" onClick={handleNext}>
        <FontAwesomeIcon icon="arrow-circle-right" />
      </button>
    </div>
  );
};
export default Carousel;
