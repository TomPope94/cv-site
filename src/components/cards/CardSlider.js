import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const styles = {
  cardsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '75vh'
  }
};

const CardSlider = props => {
  const [cardState, setCardState] = useState(0);
  const cards = props.children.props.children;

  const handleChange = direction => {
    // Find some way of adding in animation for enter/exit of card
    if (direction === 'add') {
      if (cardState === 2) {
        setCardState(0);
      } else {
        setCardState(cardState + 1);
      }
    }
    if (direction === 'subtract') {
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
    </div>
  );
};

export default CardSlider;
