import React from "react";
import "./App.css";
import Resort from "./resort";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>
          <Resort />
        </h1>
      </div>
    </Router>
  );
}

export default App;
