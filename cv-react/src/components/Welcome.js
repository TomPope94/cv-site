import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import anime from 'animejs';

import { PROJECTS } from '../constants/routes';

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
    width: '100vw'
  },
  splitLeft: {
    flexGrow: 1,
    background: '#2e3440'
  },
  splitRight: {
    flexGrow: 1,
    background: '#eceff4'
  }
};

function Welcome() {
  const [toRedirect, setRedirect] = useState(false);

  useEffect(() => {
    animateTransition(true);
  }, []);

  const animateTransition = open => {
    const animationDirection = open ? 'reverse' : 'normal';

    anime({
      targets: '.splitLeft',
      easing: 'cubicBezier(.5, .05, .1, .3)',
      width: ['0', '100vw'],
      duration: 500,
      direction: animationDirection
    });
  };
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const handleClick = async () => {
    animateTransition();
    await delay(750);
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
