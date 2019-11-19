import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import anime from "animejs";

import { PROJECTS } from "../constants/routes";

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    width: "100vw"
  },
  splitLeft: {
    flexGrow: 1,
    background: "#2e3440"
  },
  splitRight: {
    flexGrow: 1,
    background: "#eceff4"
  }
};

function Welcome() {
  const [toRedirect, setRedirect] = useState(false);

  const animateTransition = () => {
    const tl = anime.timeline({
      autoplay: true,
      easing: "cubicBezier(.5, .05, .1, .3)"
    });

    tl.add({
      targets: ".splitLeft",
      width: ["0", "100vw"],
      duration: 500
    });
  };
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const handleClick = async () => {
    animateTransition();
    await delay(500);
    setRedirect(true);
  };

  let toRender;
  if (toRedirect) {
    toRender = <Redirect to={PROJECTS} />;
  } else {
    toRender = (
      <div style={styles.pageContainer}>
        <div style={styles.splitLeft} className="splitLeft">
          <button onClick={() => handleClick()}>Next</button>
        </div>
        <div style={styles.splitRight} />
      </div>
    );
  }

  return toRender;
}

export default Welcome;
