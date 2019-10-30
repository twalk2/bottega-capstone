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
      {props.resortInfo.title}
      <div>
        <h2>
          {data.length !== 0 ? (
            <div className="weather">
              <div>Weekly Forecast:</div>
              <div>{props.info.daily.summary}</div>
              <div>{props.info.latitude}</div>
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
        </h2>
      </div>
    </ReactModal>
  );
};

export default Weather;
