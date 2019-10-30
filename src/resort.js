import React from "react";

import axios from "axios";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Resort = props => {
  const [data, setData] = React.useState([]);
  const weatherIcon = [
    "clear-day",
    "clear-night",
    "partly-cloudy-day",
    "partly-cloudy-night",
    "cloudy",
    "rain",
    "sleet",
    "snow",
    "wind",
    "fog"
  ];

  const stateCheck = () => {};

  const renderWeather = () => {
    return (
      <div>
        <h2>
          {data.length !== 0 ? (
            <div className="weather">
              <div>Weekly Forecast:</div>
              <div>{data.daily.summary}</div>
              <div>{data.latitude}</div>
            </div>
          ) : null
          // <div className="weather">
          //   <FontAwesomeIcon
          //     style={{ color: "#6ccff6", fontSize: "1.5em" }}
          //     icon="snowflake"
          //     spin
          //   />
          // </div>
          }
        </h2>
        {() => setData([])} {() => console.log("data", data)}
      </div>
    );
  };

  const handleWeather = () => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9d6d671d72df6bd4eb402730f4165563/${props.location.state.resort.location}`
      )
      .then(response => (setData(response.data), console.log(response.data)))

      .catch(err => console.log("error", err));
  };

  useEffect(() => {
    console.log(props.location.state.resort);
  }, [data]);

  return (
    <div className="resort-page-wrapper">
      <div className="resort-title">
        <h1>{props.location.state.resort.title}</h1>
      </div>
      <div className="weather-button">
        <button onClick={handleWeather}>View Weather</button>
      </div>
      {renderWeather()}

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
