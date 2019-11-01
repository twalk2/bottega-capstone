import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Review from "./Review";

import shred from "./images/main/shred-dude.jpg";
import alta from "./images/main/resort.jpg";
import parkCity from "./images/main/ski-dude.jpg";

const Carousel = () => {
  const [modalOpen, setModalOpen] = React.useState(false);

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

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (imgIndex === carouselImages.length - 1) {
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
      <button
        onClick={openModal}
        closeModal={closeModal}
        className="review-resort"
      >
        Review Resort
      </button>
      {modalOpen ? (
        <Review closeModal={closeModal} modalOpen={modalOpen} />
      ) : null}
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
