import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import shred from "./images/main/shred-dude.jpg";
import alta from "./images/main/resort.jpg";
import parkCity from "./images/main/ski-dude.jpg";

const Carousel = () => {
  const [imgIndex, setImgIndex] = React.useState(0);
  const [textIndex, setTextIndex] = React.useState(0);
  const carouselImages = [shred, alta, parkCity];
  const carouselText = [
    <div>
      Utah Ski Central <FontAwesomeIcon icon="skiing" />
    </div>,
    "View conditions at your favorite resort",
    "Check pass prices"
  ];

  const handlePrevious = () => {
    if (imgIndex === 0) {
      setImgIndex(2);
      setTextIndex(2);
    } else {
      setImgIndex(imgIndex - 1);
      setTextIndex(textIndex - 1);
      console.log(imgIndex);
    }
  };

  const handleNext = () => {
    if (imgIndex === 2) {
      setImgIndex(0);
      setTextIndex(0);
    } else {
      setImgIndex(imgIndex + 1);
      setTextIndex(textIndex + 1);
      console.log(imgIndex);
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (imgIndex === 2) {
        setImgIndex(0);
        setTextIndex(0);
      } else {
        setImgIndex(prev => prev + 1);
        setTextIndex(prev => prev + 1);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [imgIndex]);

  return (
    <div className="carousel-wrapper">
      <img
        className="carousel-image"
        src={carouselImages[imgIndex]}
        alt="Skiing"
      />
      <div className="background-bar"></div>
      <div className="carousel-text">
        <h1>{carouselText[textIndex]}</h1>
      </div>
      {/* <button className="left-button" onClick={handlePrevious}>
        <FontAwesomeIcon icon="arrow-circle-left" />
      </button>
      <button className="right-button" onClick={handleNext}>
        <FontAwesomeIcon icon="arrow-circle-right" />
      </button> */}
      <button className="review-resort">Review Resort!</button>
      <a
        className="learn-more"
        href="https://tw-bottega-react-portfolio.herokuapp.com/"
        target="_blank"
      >
        Learn More
      </a>
    </div>
  );
};
export default Carousel;
