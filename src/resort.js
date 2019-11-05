import React from "react";
import Weather from "./Weather";
import { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "./Nav";
import axios from "axios";

const Resort = props => {
  const [info, setInfo] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [review, setReview] = React.useState([]);
  const reviewCards = [];
  const [cardIndex, setCardIndex] = React.useState(0);
  const resortInfo = props.location.state.resort;

  useEffect(() => {
    getReviews();
  }, []);

  useEffect(() => {
    console.log(cardIndex);
    const interval = setInterval(() => {
      if (cardIndex === reviewCards.length - 1) {
        setCardIndex(0);
      } else {
        setCardIndex(prev => prev + 1);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [cardIndex]);

  const getReviews = () => {
    axios
      .get("https://creepy-chupacabra-73720.herokuapp.com/reviews")
      .then(response => setReview(response.data))
      .catch(error => console.log(error));
  };

  const renderReviews = () => {
    return review.map(item => {
      console.log(reviewCards);

      if (item.resort === props.location.state.resort.title) {
        reviewCards.push(item);
        return (
          <div className="resort-review-wrapper">
            <div>
              <span className="categories">Name:</span> {item.name}
            </div>
            <div className="rating">
              <span className="categories">Rating:</span>{" "}
              {renderStars(item.rating)}
            </div>
            <div>
              <span className="categories">Comment:</span> {item.comment}
            </div>
          </div>
        );
      }
    });
  };

  const openModal = async () => {
    setLoading(true);
    await axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9d6d671d72df6bd4eb402730f4165563/${props.location.state.resort.location}`
      )
      .then(response => (setInfo(response.data), console.log(info)))

      .catch(err => console.log("error", err));
    setModalOpen(true);
    setLoading(false);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const renderStars = rating => {
    switch (rating) {
      case "1 star":
        return (
          <div>
            <FontAwesomeIcon style={{ padding: "1px" }} icon="snowflake" />
          </div>
        );
      case "2 stars":
        return (
          <div>
            <FontAwesomeIcon style={{ padding: "1px" }} icon="snowflake" />
            <FontAwesomeIcon style={{ padding: "1px" }} icon="snowflake" />
          </div>
        );
      case "3 stars":
        return (
          <div>
            <FontAwesomeIcon style={{ padding: "1px" }} icon="snowflake" />
            <FontAwesomeIcon style={{ padding: "1px" }} icon="snowflake" />
            <FontAwesomeIcon style={{ padding: "1px" }} icon="snowflake" />
          </div>
        );
      case "4 stars":
        return (
          <div>
            <FontAwesomeIcon style={{ padding: "1px" }} icon="snowflake" />
            <FontAwesomeIcon style={{ padding: "1px" }} icon="snowflake" />
            <FontAwesomeIcon style={{ padding: "1px" }} icon="snowflake" />
            <FontAwesomeIcon style={{ padding: "1px" }} icon="snowflake" />
          </div>
        );
      case "5 stars":
        return (
          <div>
            <FontAwesomeIcon style={{ padding: "1px" }} icon="snowflake" />
            <FontAwesomeIcon style={{ padding: "1px" }} icon="snowflake" />
            <FontAwesomeIcon style={{ padding: "1px" }} icon="snowflake" />
            <FontAwesomeIcon style={{ padding: "1px" }} icon="snowflake" />
            <FontAwesomeIcon style={{ padding: "1px" }} icon="snowflake" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="resort-page-wrapper">
      <Nav closeModal={closeModal} />
      <div className="resort-title">
        <h1>{props.location.state.resort.title}</h1>
      </div>
      <div className="pass-prices">
        <h2>Day pass: {props.location.state.resort.day}</h2>
        <h2>Night pass: {props.location.state.resort.night}</h2>
      </div>
      <div className="weather-button">
        {loading ? (
          <button>
            Loading...
            <FontAwesomeIcon
              style={{ color: "#2e2f2f" }}
              icon="snowflake"
              spin
            />
          </button>
        ) : (
          <button onClick={openModal}>View Weather</button>
        )}
        {modalOpen ? (
          <Weather
            closeModal={closeModal}
            modalOpen={modalOpen}
            resortInfo={resortInfo}
            info={info}
          />
        ) : null}
      </div>
      <div className="cards-wrapper">{renderReviews()}</div>
      <div className="trailmap-wrapper">
        <img
          className="trailmap-img"
          src={require("./images/trailmaps/" +
            props.location.state.resort.trailMap +
            ".jpg")}
          alt="Map"
        />
      </div>
    </div>
  );
};

export default Resort;
