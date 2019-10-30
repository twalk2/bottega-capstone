import React from "react";

import { useEffect } from "react";
import ReactModal from "react-modal";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Weather = props => {
  const [data, setData] = React.useState([props]);
  const [customStyles, setCustomStyles] = React.useState({
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
                <div>Weekly Forecast:</div>
              </h3>
              <div>{props.info.daily.icon}</div>
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
