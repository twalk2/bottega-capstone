import React from "react";

import axios from "axios";
import { useEffect } from "react";

const Resort = () => {
  const [data, setData] = React.useState([]);

  const handleWeather = () => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9d6d671d72df6bd4eb402730f4165563/40.6461,-111.4980"
      )
      .then(response => setData(response.data))

      .catch(err => console.log("error", err));
  };

  useEffect(() => {
    handleWeather();
  }, []);

  return (
    <div className="resort-page-wrapper">
      <h1>
        {data.length !== 0 ? data.daily.summary : <span>...Loading Data</span>}
      </h1>
    </div>
  );
};

export default Resort;
