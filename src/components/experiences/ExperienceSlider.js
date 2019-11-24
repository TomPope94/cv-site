import React, { useState, useEffect, Fragment } from 'react';
import { useSwipeable } from 'react-swipeable';
import anime from 'animejs';
import uuid from 'uuid';

import Liberty from './Liberty';
import VirginMedia from './VirginMedia';
import Disney from './Disney';

const styles = {
  swipeableDiv: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignItems: 'center',
    fontFamily: 'source-code-pro, monospace',
    fontStyle: 'normal'
    // position: 'relative'
  },
  fullStop: {
    color: '#D08770'
  },
  pageTitle: {
    fontSize: '3rem',
    fontWeight: '200',
    color: '#2e3440'
  }
};

const ExperienceSlider = () => {
  const [exp, setExp] = useState(0);
  const [buttonState, setButtonState] = useState('right');
  const [titleText, setTitleText] = useState([]);
  useEffect(() => {
    titleAnimation();
  }, []);

  const experiences = [<Liberty />, <VirginMedia />, <Disney />];
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const splitToSpans = text => {
    let spanArr = [];

    for (let i = 0; i < text.length; i++) {
      spanArr.push(
        <span
          key={uuid.v4()}
          style={{
            display: 'inline-block',
            whiteSpace: 'pre',
            color: '#2e3440'
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
    const title = "Where I've Worked";
    const spans = splitToSpans(title);
    await delay(750);
    await setTitleText(spans);
    anime({
      targets: '.letter',
      rotateY: [-90, 0],
      delay: anime.stagger(100)
    });
  };

  const handleChange = direction => {
    if (direction === 'add') {
      if (exp !== 2) {
        setExp(exp + 1);
      }
      if (exp === 0) {
        setButtonState('both');
      } else if (exp === 1) {
        setButtonState('left');
      }
    }
    if (direction === 'subtract') {
      if (exp !== 0) {
        setExp(exp - 1);
      }
      if (exp === 1) {
        setButtonState('right');
      } else if (exp === 2) {
        setButtonState('both');
      }
    }
  };

  let buttonRender;
  if (buttonState === 'right') {
    buttonRender = (
      <button
        style={{ position: 'absolute', right: 0, top: '50%' }}
        onClick={() => handleChange('add')}
      >
        Next
      </button>
    );
  } else if (buttonState == 'left') {
    buttonRender = (
      <button
        style={{ position: 'absolute', left: 0, top: '50%' }}
        onClick={() => handleChange('subtract')}
      >
        Back
      </button>
    );
  } else if (buttonState == 'both') {
    buttonRender = (
      <Fragment>
        <button
          style={{ position: 'absolute', right: 0, top: '50%' }}
          onClick={() => handleChange('add')}
        >
          Next
        </button>
        <button
          style={{ position: 'absolute', left: 0, top: '50%' }}
          onClick={() => handleChange('subtract')}
        >
          Back
        </button>
      </Fragment>
    );
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => handleChange('add'),
    onSwipedRight: () => handleChange('subtract'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div {...handlers} style={styles.swipeableDiv}>
      {buttonRender}
      <div>
        <h1 style={{ ...styles.pageTitle, color: '#2e3440' }}>{titleText}</h1>
      </div>
      {experiences[exp]}
    </div>
  );
};

export default ExperienceSlider;
