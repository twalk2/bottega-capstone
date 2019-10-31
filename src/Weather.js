import React from "react";

import ReactModal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Weather = props => {
  const [data] = React.useState([props]);
  const [customStyles] = React.useState({
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "800px",
      zIndex: 9999
    },
    overlay: {
      backgroundColor: "rgba(1, 1, 1, 0.75)"
    }
  });

  const weatherIcon = icon => {
    console.log(props.info);
    if (icon === "clear-day") {
      return <FontAwesomeIcon icon="sun" />;
    } else if (icon === "clear-night") {
      return <FontAwesomeIcon icon="moon" />;
    } else if (icon === "partly-cloudy-day") {
      return <FontAwesomeIcon icon="cloud-sun" />;
    } else if (icon === "partly-cloudy-night") {
      return <FontAwesomeIcon icon="cloud-moon" />;
    } else if (icon === "cloudy") {
      return <FontAwesomeIcon icon="cloud" />;
    } else if (icon === "rain") {
      return <FontAwesomeIcon icon="cloud-rain" />;
    } else if (icon === "sleet") {
      return <FontAwesomeIcon icon="cloud-shower-heavy" />;
    } else if (icon === "snow") {
      return <FontAwesomeIcon icon="snowflake" />;
    } else if (icon === "wind") {
      return <FontAwesomeIcon icon="wind" />;
    } else if (icon === "fog") {
      return <FontAwesomeIcon icon="smog" />;
    } else {
      return "?";
    }
  };

  return (
    <ReactModal
      style={customStyles}
      onRequestClose={() => props.closeModal()}
      isOpen={props.modalOpen}
    >
      <div className="weather-wrapper">
        <div className="resort-title">{props.resortInfo.title}</div>
        <div>
          {data.length !== 0 ? (
            <div className="weather">
              <h3>
                <div>Forecast:</div>
              </h3>
              <div className="weather-modal">
                <div className="weather-icon">
                  {weatherIcon(props.info.daily.icon)}
                </div>
                <div>{props.info.currently.summary}</div>
                <div>{props.info.currently.temperature} degrees</div>
              </div>
              <div>{props.info.daily.summary}</div>
            </div>
          ) : (
            <div className="weather">
              <FontAwesomeIcon
                style={{ color: "#6ccff6", fontSize: "1.5em" }}
                icon="snowflake"
                spin
              />
            </div>
          )}
        </div>
      </div>
    </ReactModal>
  );
};

export default Weather;
