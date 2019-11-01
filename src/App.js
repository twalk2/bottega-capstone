import React from "react";
import "./styles/App.scss";
import Home from "./Home";
import Resort from "./resort";

import {
  faMountain,
  faSkiing,
  faSnowflake,
  faArrowAltCircleDown,
  faSun,
  faMoon,
  faCloudSun,
  faCloudMoon,
  faCloud,
  faCloudRain,
  faCloudShowersHeavy,
  faWind,
  faSmog,
  faStar,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  library.add(
    faMountain,
    faSkiing,
    faSnowflake,
    faArrowAltCircleDown,
    faSun,
    faMoon,
    faCloudSun,
    faCloudMoon,
    faCloud,
    faCloudRain,
    faCloudShowersHeavy,
    faWind,
    faSmog,
    faStar,
    faBars
  );
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resort/:slug" component={Resort} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
