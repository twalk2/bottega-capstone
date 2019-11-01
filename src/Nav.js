import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = props => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [toggleDrop, setToggleDrop] = useState(false);
  const resorts = [
    {
      title: "Alta",
      location: "40.5883,-111.6358",
      trailMap: "Alta"
    },
    { title: "Brighton", location: "40.5980,-111.5832", trailMap: "Brighton" },
    {
      title: "Deer Valley",
      location: "40.6374,-111.4783",
      trailMap: "Deer-Valley"
    },
    {
      title: "Park City",
      location: "40.6514,-111.5080",
      trailMap: "Park-City"
    },
    {
      title: "Powder Mountain",
      location: "41.3790,-111.7807",
      trailMap: "Powder-Mountain"
    },
    {
      title: "Snowbasin",
      location: "41.2160,-111.8569",
      trailMap: "Snowbasin"
    },
    { title: "Snowbird", location: "40.5651,-111.6536", trailMap: "Snowbird" },
    { title: "Solitude", location: "40.6199,-111.5919", trailMap: "Solitude" }
  ];

  const updateWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, [windowWidth]);

  const navState = () => {
    if (windowWidth <= 1024) {
      if (toggleDrop == false) {
        return (
          <div
            className="icon-wrapper"
            style={{ position: "absolute", left: "1%", top: "2%" }}
          >
            <button onClick={() => setToggleDrop(!toggleDrop)}>
              <FontAwesomeIcon icon="bars" />
            </button>
          </div>
        );
      } else {
        return (
          <div>
            <div
              className="icon-wrapper"
              style={{ position: "absolute", left: "1%", top: "2%" }}
            >
              <button onClick={() => setToggleDrop(!toggleDrop)}>
                <FontAwesomeIcon icon="bars" />
              </button>
            </div>
            {renderLinks()}
          </div>
        );
      }
    } else {
      return resorts.map(resort => {
        return (
          <div key={resort.title} className="link-wrapper">
            <Link
              to={{
                pathname: `/resort/${resort.title}`,
                state: {
                  resort
                }
              }}
              onClick={() => props.closeModal()}
            >
              {resort.title}
            </Link>
          </div>
        );
      });
    }
  };

  const closeIsh = () => {
    props.closeModal();
    setToggleDrop(false);
  };

  const renderLinks = () => {
    return resorts.map(resort => {
      return (
        <div key={resort.title} className="link-wrapper">
          <Link
            to={{
              pathname: `/resort/${resort.title}`,
              state: {
                resort
              }
            }}
            onClick={() => closeIsh()}
          >
            {resort.title}
          </Link>
        </div>
      );
    });
  };

  return (
    <div className="navbar">
      <div className="icon-wrapper">
        <Link to="/">
          <FontAwesomeIcon icon="mountain" />
        </Link>
      </div>
      {navState()}
    </div>
  );
};

export default Nav;
