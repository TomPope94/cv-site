import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import anime from 'animejs';

import { PROJECTS } from '../constants/routes';

let textInterval;

function Welcome() {
  const [toRedirect, setRedirect] = useState(false);
  const [alreadyChanged, setChange] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth
  });
  const { width } = dimensions;
  const [descText, setDescText] = useState([]);

  useEffect(() => {
    animateTransition(true);
    animateText();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth
      });
    };

    window.addEventListener('resize', handleResize);

    return _ => {
      window.removeEventListener('resize', handleResize);
    };
  });

  let history = useHistory();

  const styles = {
    pageContainer: {
      display: 'flex',
      flexDirection: width > 750 ? 'row' : 'column',
      height: '100vh',
      width: '100vw'
    },
    halfScreen: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: width > 750 ? 0 : '100%',
      height: width > 750 ? '100%' : 0
    },
    fullStop: {
      color: '#D08770'
    },
    title: {
      fontSize: width > 750 ? '3rem' : '10vw',
      fontFamily: 'source-code-pro, monospace',
      fontStyle: 'normal',
      fontWeight: '200'
    }
  };

  const splitToSpans = text => {
    let spanArr = [];

    for (let i = 0; i < text.length; i++) {
      spanArr.push(
        <span
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
          className="letter"
        >
          {text[i]}
        </span>
      );
    }
    spanArr.push(
      <span
        style={{ ...styles.fullStop, display: 'inline-block' }}
        className="letter"
      >
        .
      </span>
    );
    return spanArr;
  };

  const animateText = () => {
    const textArr = [
      'Analyst',
      'Web Developer',
      'Data Visualiser',
      '"Too" Tall'
    ];
    let count = 0;
    textInterval = setInterval(async () => {
      let text = textArr[count];
      const spans = splitToSpans(text);
      setDescText(spans);

      anime({
        targets: '.letter',
        rotateY: [-90, 0],
        duration: 1000,
        delay: (el, i) => 45 * i
      });
      await delay(1000);
      if (count === textArr.length - 1) {
        count = -1;
      }
      count++;
    }, 2000);
  };

  const animateTransition = open => {
    const animationDirection = open ? 'reverse' : 'normal';

    if (width > 750) {
      anime({
        targets: '.splitLeft',
        easing: 'easeInElastic(1, 5)',
        width: ['null', '100vw'],
        duration: 750,
        direction: animationDirection
      });
    } else {
      anime({
        targets: '.splitLeft',
        easing: 'easeInElastic(1, 5)',
        height: ['null', '100vh'],
        duration: 750,
        direction: animationDirection
      });
    }
  };
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const handleChange = async (e, type) => {
    // This step stops the animation restarting if the user spams the scroll wheel
    if (
      (!alreadyChanged && e.deltaY > 0) ||
      (!alreadyChanged && type === 'change')
    ) {
      setChange(true);
      clearInterval(textInterval);
      animateTransition();
      await delay(750);
      setRedirect(true);
    }
  };

  const handlers = useSwipeable({
    onSwipedRight: e => handleChange(e, 'change'),
    onSwipedDown: e => handleChange(e, 'change'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  let toRender;
  if (toRedirect) {
    history.push(PROJECTS);
    toRender = null;
  } else {
    toRender = (
      <div
        style={styles.pageContainer}
        onWheel={e => handleChange(e, 'change')}
      >
        <div
          style={{ ...styles.halfScreen, background: '#2e3440' }}
          {...handlers}
          className="splitLeft"
        >
          <h1 style={{ ...styles.title, color: '#eceff4' }}>Tom Pope</h1>
        </div>
        <div style={{ ...styles.halfScreen, background: '#eceff4' }}>
          <h1 style={{ ...styles.title, color: '#2e3440' }}>{descText}</h1>
        </div>
      </div>
    );
  }

  return toRender;
}

export default Welcome;
