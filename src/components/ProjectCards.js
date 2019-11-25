import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import anime from 'animejs';
import { useSwipeable } from 'react-swipeable';
import uuid from 'uuid';
import { isMobile } from 'react-device-detect';

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

  const [titleText, setTitleText] = useState([]);

  let history = useHistory();

  const styles = {
    pageContainer: {
      position: 'fixed',
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
      color: '#eceff4',
      marginTop: 50,
      marginBottom: 10
    },
    fullStop: {
      color: '#D08770'
    },
    scrollHelper: {
      position: 'absolute',
      right: 0,
      fontFamily: 'source-code-pro, monospace',
      fontStyle: 'normal',
      fontWeight: '200',
      color: '#eceff4',
      display: 'block',
      cursor: 'pointer',
      marginRight: 10
    },
    button: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      height: '100%',
      width: '100%',
      outline: 'none'
    }
  };

  useEffect(() => {
    cardsAnimation(true);
    titleAnimation();
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

  const splitToSpans = text => {
    let spanArr = [];

    for (let i = 0; i < text.length; i++) {
      spanArr.push(
        <span
          key={uuid.v4()}
          style={{
            display: 'inline-block',
            whiteSpace: 'pre',
            color: '#eceff4'
          }}
          className="letter"
        >
          {text[i]}
        </span>
      );
    }
    spanArr.push(
      <span
        key={uuid.v4()}
        style={{ ...styles.fullStop, display: 'inline-block' }}
        className="letter"
      >
        .
      </span>
    );
    return spanArr;
  };

  const titleAnimation = async () => {
    const title = "What I've Done";
    const spans = splitToSpans(title);
    await setTitleText(spans);

    anime({
      targets: '.letter',
      rotateY: [-90, 0],
      delay: anime.stagger(100)
    });
  };

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
      <button style={styles.button}>
        <FlipCard
          cardName="commercial"
          CardBack={CommercialBack}
          CardFront={CommercialFront}
        />
      </button>
      <button style={styles.button}>
        <FlipCard
          cardName="personal"
          CardBack={PersonalBack}
          CardFront={PersonalFront}
        />
      </button>
      <button style={styles.button}>
        <FlipCard
          cardName="achieve"
          CardBack={AchieveBack}
          CardFront={AchieveFront}
        />
      </button>
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
    cardsRender = <CardSlider cardComponents={cards} />;
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
          <p style={{ ...styles.scrollHelper, top: 0 }}>
            {!isMobile ? '...Scroll up to go back' : '...Swipe down'}
          </p>
          <div style={styles.contentsContainer}>
            <h1 style={{ ...styles.titleText, color: '#2e3440' }}>
              {titleText}
            </h1>
            {cardsRender}
          </div>
          <p style={{ ...styles.scrollHelper, bottom: 0 }}>
            {!isMobile ? 'Scroll down for even more...' : null}
          </p>
        </div>
      </Fragment>
    );
  }

  return toRender;
};

export default ProjectCards;
