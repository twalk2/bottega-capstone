import React from "react";
import "./styles/App.scss";
import Home from "./Home";
import Nav from "./Nav";
import Resort from "./resort";

import {
  faArrowCircleRight,
  faArrowCircleLeft,
  faMountain,
  faSkiing,
  faSnowflake
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  library.add(
    faArrowCircleRight,
    faArrowCircleLeft,
    faMountain,
    faSkiing,
    faSnowflake
  );
  return (
    <Router>
      <div className="App">
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resort/:slug" component={Resort} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
