import React, { Fragment, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import anime from 'animejs';

import { WELCOME, EXPERIENCE } from '../constants/routes';

const styles = {
  pageContainer: {
    height: '100vh',
    width: '100vw',
    background: '#2e3440'
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  card: {
    flexGrow: 1,
    background: '#eceff4',
    borderRadius: 10,
    margin: 25,
    marginTop: '10vh',
    height: '75vh',
    boxShadow: '0 5px 10px black'
  }
};

const ProjectCards = () => {
  const [toRedirect, setRedirect] = useState({
    destination: ''
  });

  const { destination } = toRedirect;

  useEffect(() => {
    cardsAnimation(true);
  }, []);

  const cardsAnimation = open => {
    const animationDirection = open ? 'normal' : 'reverse';

    anime({
      targets: '.projectCard',
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

  let toRender;
  if (destination != '') {
    toRender = <Redirect to={destination} />;
  } else {
    toRender = (
      <Fragment>
        <div style={styles.pageContainer}>
          <div style={styles.cardsContainer} className="cardsContainer">
            <div style={styles.card} className="projectCard">
              <button onClick={() => handleClick('/')}>Back</button>
              <button onClick={() => handleClick('/experience')}>Next</button>
            </div>
            <div style={styles.card} className="projectCard" />
            <div style={styles.card} className="projectCard" />
          </div>
        </div>
      </Fragment>
    );
  }

  return toRender;
};

export default ProjectCards;
