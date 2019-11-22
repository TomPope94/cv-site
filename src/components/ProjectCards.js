import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import anime from 'animejs';
import { useSwipeable } from 'react-swipeable';

import { WELCOME, EXPERIENCE } from '../constants/routes';
import CommercialBack from './cards/CommercialBack';
import CommercialFront from './cards/CommercialFront';
import PersonalBack from './cards/PersonalBack';
import PersonalFront from './cards/PersonalFront';
import AchieveBack from './cards/AchieveBack';
import AchieveFront from './cards/AchieveFront';
import FlipCard from './cards/FlipCard';
import CardSlider from './cards/CardSlider';

const ProjectCards = () => {
  const [toRedirect, setRedirect] = useState({
    destination: ''
  });
  const { destination } = toRedirect;

  const [alreadyChanged, setChange] = useState(false);

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    titleFont: window.innerWidth > 750 ? '3rem' : '10vw'
  });
  const { width, titleFont } = dimensions;

  let history = useHistory();

  const styles = {
    pageContainer: {
      height: '100vh',
      width: '100vw',
      background: 'linear-gradient(to top right, #2e3440, #4C566A)'
    },
    contentsContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    cardsContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      height: '75vh'
    },
    titleText: {
      fontFamily: 'source-code-pro, monospace',
      fontStyle: 'normal',
      fontWeight: '200',
      fontSize: titleFont,
      color: '#eceff4'
    },
    fullStop: {
      color: '#D08770'
    }
  };

  useEffect(() => {
    cardsAnimation(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const fontSize = window.innerWidth > 750 ? '3rem' : '10vw';
      setDimensions({
        width: window.innerWidth,
        titleFont: fontSize
      });
    };

    window.addEventListener('resize', handleResize);

    return _ => {
      window.removeEventListener('resize', handleResize);
    };
  });

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

  const handleChange = async e => {
    if (!alreadyChanged) {
      setChange(true);
      let stateVal = e.deltaY > 0 ? { EXPERIENCE } : { WELCOME };
      const route = Object.values(stateVal)[0];
      cardsAnimation(false);
      await delay(1000);
      setRedirect({ destination: route });
    }
  };

  const handlers = useSwipeable({
    onSwipedDown: e => handleChange(e),
    onSwipedUp: e => handleChange(e),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const cards = (
    <Fragment>
      <FlipCard
        className="projectCard"
        CardBack={CommercialBack}
        CardFront={CommercialFront}
      />
      <FlipCard
        className="projectCard"
        CardBack={PersonalBack}
        CardFront={PersonalFront}
      />
      <FlipCard
        className="projectCard"
        CardBack={AchieveBack}
        CardFront={AchieveFront}
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
  if (destination !== '') {
    history.push(destination);
    toRender = null;
  } else {
    toRender = (
      <Fragment>
        <div
          style={styles.pageContainer}
          {...handlers}
          onWheel={e => handleChange(e)}
        >
          <div style={styles.contentsContainer}>
            <h1 style={styles.titleText}>
              What I've Done<span style={styles.fullStop}>.</span>
            </h1>{' '}
            {cardsRender}
          </div>
        </div>
      </Fragment>
    );
  }

  return toRender;
};

export default ProjectCards;
