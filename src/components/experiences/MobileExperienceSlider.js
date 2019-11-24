import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import uuid from 'uuid';
import anime from 'animejs';

import MobileLiberty from './MobileLiberty';
import MobileVirginMedia from './MobileVirginMedia';
import MobileDisney from './MobileDisney';

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
  },
  pageTitle: {
    fontSize: '7vw',
    marginLeft: 50,
    fontWeight: '200',
    color: '#2e3440'
  },
  fullStop: {
    color: '#D08770'
  }
};

const MobileExperienceSlider = () => {
  const [exp, setExp] = useState(0);
  const [titleText, setTitleText] = useState([]);
  useEffect(() => {
    titleAnimation();
  }, []);

  const experiences = [
    <MobileLiberty />,
    <MobileVirginMedia />,
    <MobileDisney />
  ];
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

  const handlers = useSwipeable({
    onSwipedLeft: () => handleChange('add'),
    onSwipedRight: () => handleChange('subtract'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const handleChange = direction => {
    if (direction === 'add') {
      if (exp !== 2) {
        setExp(exp + 1);
      }
      //   if (exp === 0) {
      //     setButtonState('both');
      //   } else if (exp === 1) {
      //     setButtonState('left');
      //   }
    }
    if (direction === 'subtract') {
      if (exp !== 0) {
        setExp(exp - 1);
      }
      //   if (exp === 1) {
      //     setButtonState('right');
      //   } else if (exp === 2) {
      //     setButtonState('both');
      //   }
    }
  };

  return (
    <div {...handlers} style={styles.swipeableDiv}>
      <div>
        <h1 style={{ ...styles.pageTitle, color: '#2e3440' }}>{titleText}</h1>
      </div>
      {experiences[exp]}
    </div>
  );
};

export default MobileExperienceSlider;
