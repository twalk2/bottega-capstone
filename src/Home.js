import React from "react";
import Carousel from "./Carousel";
import Nav from "./Nav";

const Home = () => {
  const closeModal = () => {
    console.log("hello");
  };
  return (
    <div className="home-wrapper">
      <Nav closeModal={closeModal} />
      <Carousel />
    </div>
  );
};

export default Home;
