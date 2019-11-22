import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import anime from 'animejs';
import { useSwipeable } from 'react-swipeable';

import { PROJECTS, CONTACT } from '../constants/routes';
import ExperienceSlider from './experiences/ExperienceSlider';

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
    width: '100vw',
    background: '#eceff4'
  },
  animationContainer: {
    height: '100vh',
    width: '100vw',
    background: '#2e3440',
    top: 0,
    position: 'absolute',
    transformOrigin: 'top'
  },
  buttons: {
    height: 30
  }
};

const Experience = () => {
  useEffect(() => {
    animateContainer(true);
  }, []);

  const [toRedirect, setRedirect] = useState({
    destination: ''
  });
  const { destination } = toRedirect;

  let history = useHistory();

  const delay = ms => new Promise(res => setTimeout(res, ms));
  const animateContainer = open => {
    const animationDirection = open ? 'normal' : 'reverse';

    anime({
      targets: '.animationContainer',
      scaleY: [1, 0],
      duration: 750,
      easing: 'easeInElastic(1, 5)',
      direction: animationDirection
    });
  };

  const handleClick = async stateVal => {
    const route = Object.values(stateVal)[0];
    animateContainer(false);
    await delay(1000);
    setRedirect({ destination: route });
  };

  const handlers = useSwipeable({
    onSwipedDown: () => handleClick({ PROJECTS }),
    onSwipedUp: () => handleClick({ CONTACT }),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  let toRender;
  if (destination !== '') {
    history.push(destination);
    toRender = null;
  } else {
    toRender = (
      <Fragment>
        <div style={styles.animationContainer} className="animationContainer" />
        <div style={styles.pageContainer} {...handlers}>
          <h1>My Experience.</h1>
          <ExperienceSlider />
        </div>
      </Fragment>
    );
  }

  return toRender;
};

export default Experience;
