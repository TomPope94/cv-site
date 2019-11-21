import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
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
      easing: 'easeInElastic(1, 5)',
      width: ['0', '100vw'],
      duration: 750,
      direction: animationDirection
    });
  };
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const handleClick = async () => {
    animateTransition();
    await delay(1000);
    setRedirect(true);
  };

  const handlers = useSwipeable({
    onSwipedRight: () => handleClick(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  let toRender;
  if (toRedirect) {
    toRender = <Redirect to={PROJECTS} />;
  } else {
    toRender = (
      <div style={styles.pageContainer}>
        <div style={styles.splitLeft} {...handlers} className="splitLeft" />
        <div style={styles.splitRight} />
      </div>
    );
  }

  return toRender;
}

export default Welcome;
