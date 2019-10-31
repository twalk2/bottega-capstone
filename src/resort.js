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
  const resortInfo = props.location.state.resort;

  // const handleWeather = () => {
  //   axios
  //     .get(
  //       `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9d6d671d72df6bd4eb402730f4165563/${props.location.state.resort.location}`
  //     )
  //     .then(response => (setData(response.data), console.log(response.data)))

  //     .catch(err => console.log("error", err));
  // };

  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = () => {
    axios
      .get("https://creepy-chupacabra-73720.herokuapp.com/reviews")
      .then(response => setReview(response.data))
      .catch(error => console.log(error));
  };

  const renderReviews = () => {
    return review.map(item => {
      if (item.resort === props.location.state.resort.title) {
        return (
          <div className="resort-review-wrapper">
            <div>
              <span className="categories">Name:</span> {item.name}
            </div>
            <div>
              <span className="categories">Rating:</span> {item.rating}
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

  return (
    <div className="resort-page-wrapper">
      <Nav closeModal={closeModal} />
      <div className="resort-title">
        <h1>{props.location.state.resort.title}</h1>
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
