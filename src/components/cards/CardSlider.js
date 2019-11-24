import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import anime from 'animejs';

const styles = {
  cardsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '75vh',
    position: 'relative'
  },
  helperText: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 0,
    marginRight: 10,
    color: '#eceff4',
    fontFamily: 'source-code-pro, monospace',
    fontStyle: 'normal',
    fontWeight: '200'
  }
};

const CardSlider = ({ cardComponents }) => {
  const [cardState, setCardState] = useState(0);
  const cards = cardComponents.props.children;

  const animateCardRight = () => {
    anime
      .timeline({
        targets: '.projectCard'
      })
      .add({
        translateX: [0, '100vw'],
        duration: 1250
      })
      .add(
        {
          translateX: ['-100vw', 0],
          duration: 1000
        },
        250
      );
  };
  const animateCardLeft = () => {
    anime
      .timeline({
        targets: '.projectCard'
      })
      .add({
        translateX: [0, '-100vw'],
        duration: 1250
      })
      .add(
        {
          translateX: ['100vw', 0],
          duration: 1000
        },
        250
      );
  };
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const handleChange = async direction => {
    if (direction === 'add') {
      animateCardLeft();
      await delay(100);
      if (cardState === 2) {
        setCardState(0);
      } else {
        setCardState(cardState + 1);
      }
    }
    if (direction === 'subtract') {
      animateCardRight();
      await delay(100);
      if (cardState === 0) {
        setCardState(2);
      } else {
        setCardState(cardState - 1);
      }
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleChange('add'),
    onSwipedRight: () => handleChange('subtract'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
  return (
    <div {...handlers} style={styles.cardsContainer} className="cardsContainer">
      {cards[cardState]}
      <p style={styles.helperText}>Swipe up...</p>
    </div>
  );
};

export default CardSlider;
