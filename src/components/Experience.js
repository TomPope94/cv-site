import React, { Fragment, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import anime from 'animejs';

import { PROJECTS, CONTACT } from '../constants/routes';

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
    animateContainer(false);
    await delay(1000);
    setRedirect({ destination: stateVal });
  };

  let toRender;
  if (destination !== '') {
    toRender = <Redirect to={destination} />;
  } else {
    toRender = (
      <Fragment>
        <div style={styles.animationContainer} className="animationContainer" />
        <div style={styles.pageContainer}>
          <button
            style={styles.buttons}
            onClick={() => handleClick('/projects')}
          >
            Back
          </button>
          <button
            style={styles.buttons}
            onClick={() => handleClick('/contact')}
          >
            Next
          </button>
        </div>
      </Fragment>
    );
  }

  return toRender;
};

export default Experience;
