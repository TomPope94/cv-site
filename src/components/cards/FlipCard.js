import React, { useState } from 'react';
import anime from 'animejs';
import { isMobile } from 'react-device-detect';

const FlipCard = ({ CardFront, CardBack, cardName }) => {
  const [flipState, setFlipState] = useState({
    toggle: false
  });
  const { toggle } = flipState;

  const styles = {
    card: {
      background: 'transparent',
      flexGrow: 1,
      borderRadius: 20,
      marginLeft: 25,
      marginRight: 25,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      willChange: 'transform'
    },
    hoverContainer: {
      marginLeft: 25,
      marginRight: 25,
      display: 'flex',
      width: '100%',
      height: '100%',
      willChange: 'transform'
    },
    cardInner: {
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      width: '100%',
      flexGrow: 20,
      textAlign: 'center',
      transformOrigin: 'center',
      transition: 'transform 0.8s',
      transformStyle: 'preserve-3d',
      willChange: 'transform'
    },
    flipButton: {
      flexGrow: 1,
      width: 50,
      cursor: 'pointer'
    },
    flipCardBoth: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backfaceVisibility: 'hidden',
      background: 'transparent',
      borderRadius: 10
    },
    flipCardBack: {
      transform: 'rotateY(180deg)'
    }
  };
  const flipCard = async () => {
    const animateDirection = toggle ? 'reverse' : 'normal';
    setFlipState({ ready: false });

    anime({
      targets: `.${cardName}`,
      rotateY: [0, 180],
      duration: 100,
      direction: animateDirection
    });

    setFlipState({ toggle: !toggle });
  };

  let flipButton;
  if (isMobile) {
    flipButton = (
      <button style={styles.flipButton} onClick={() => flipCard()}>
        Flip
      </button>
    );
  } else {
    flipButton = null;
  }

  return (
    <div style={styles.card} className={`projectCard ${cardName}-slide`}>
      <div
        style={styles.hoverContainer}
        onMouseEnter={() => {
          if (!isMobile) {
            flipCard();
          }
        }}
        onMouseLeave={() => {
          if (!isMobile) {
            flipCard();
          }
        }}
      >
        <div style={styles.cardInner} className={`flipCardInner ${cardName}`}>
          <div style={styles.flipCardBoth}>
            <CardBack />
          </div>
          <div style={{ ...styles.flipCardBoth, ...styles.flipCardBack }}>
            <CardFront />
          </div>
        </div>
      </div>
      {flipButton}
    </div>
  );
};

export default FlipCard;
