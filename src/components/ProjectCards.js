import React, { Fragment, useEffect, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import anime from "animejs";

import { WELCOME, EXPERIENCE, COMMERCIALPROJECTS } from "../constants/routes";
import Commercial from "./cards/Commercial";
import FlipCard from "./cards/FlipCard";
import CardSlider from "./cards/CardSlider";

const styles = {
  pageContainer: {
    height: "100vh",
    width: "100vw",
    background: "#2e3440"
  },
  contentsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: "75vh"
  }
};

const ProjectCards = () => {
  const [toRedirect, setRedirect] = useState({
    destination: ""
  });
  const { destination } = toRedirect;

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });
  const { height, width } = dimensions;

  const windowWidth = window.innerWidth;

  useEffect(() => {
    cardsAnimation(true);
  }, []);

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }

    window.addEventListener("resize", handleResize);

    return _ => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const cardsAnimation = open => {
    const animationDirection = open ? "normal" : "reverse";

    anime({
      targets: ".projectCard",
      scaleY: [0, 1],
      direction: animationDirection,
      duration: 750
    });
  };
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const handleClick = async stateVal => {
    cardsAnimation(false);
    await delay(1000);
    setRedirect({ destination: stateVal });
  };

  const cards = (
    <Fragment>
      <FlipCard
        className="projectCard"
        cardBack={Commercial}
        cardFront="Commercial"
      />
      <FlipCard
        className="projectCard"
        cardBack={Commercial}
        cardFront="Personal"
      />
      <FlipCard
        className="projectCard"
        cardBack={Commercial}
        cardFront="Acheivements"
      />
    </Fragment>
  );

  let cardsRender;
  if (width > 750) {
    cardsRender = (
      <div style={styles.cardsContainer} className="cardsContainer">
        {cards}
      </div>
    );
  } else {
    cardsRender = <CardSlider>{cards}</CardSlider>;
  }

  let toRender;
  if (destination != "") {
    toRender = <Redirect to={destination} />;
  } else {
    toRender = (
      <Fragment>
        <div style={styles.pageContainer}>
          <div style={styles.contentsContainer}>
            <div>
              <button onClick={() => handleClick("/")}>Back</button>
            </div>
            {cardsRender}
            <div>
              <button onClick={() => handleClick("/experience")}>Next</button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

  return toRender;
};

export default ProjectCards;
