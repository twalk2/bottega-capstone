import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="icon-wrapper">
        <FontAwesomeIcon icon="mountain" />
      </div>
      <div className="link-wrapper">
        <Link to="">Alta</Link>
      </div>
      <div className="link-wrapper">
        <Link to="">Brighton</Link>
      </div>
      <div className="link-wrapper">
        <Link to="">Deer Valley</Link>
      </div>
      <div className="link-wrapper">
        <Link to="">Park City</Link>
      </div>
      <div className="link-wrapper">
        <Link to="">Powder Mountain</Link>
      </div>
      <div className="link-wrapper">
        <Link to="">Snowbasin</Link>
      </div>
      <div className="link-wrapper">
        <Link to="">Snowbird</Link>
      </div>
      <div className="link-wrapper">
        <Link to="">Solitude</Link>
      </div>
    </div>
  );
};

export default Nav;
