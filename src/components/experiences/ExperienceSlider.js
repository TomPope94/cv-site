import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import Liberty from './Liberty';
import VirginMedia from './VirginMedia';
import Disney from './Disney';

const styles = {
  swipeableDiv: {
    width: '100vw',
    height: '100vh'
  }
};

const ExperienceSlider = () => {
  const [exp, setExp] = useState(0);
  const experiences = [<Liberty />, <VirginMedia />, <Disney />];

  const handleChange = direction => {
    // Find some way of adding in animation for enter/exit of card
    if (direction === 'add') {
      if (exp === 2) {
        setExp(0);
      } else {
        setExp(exp + 1);
      }
    }
    if (direction === 'subtract') {
      if (exp === 0) {
        setExp(2);
      } else {
        setExp(exp - 1);
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
    <div {...handlers} style={styles.swipeableDiv}>
      {experiences[exp]}
    </div>
  );
};

export default ExperienceSlider;
