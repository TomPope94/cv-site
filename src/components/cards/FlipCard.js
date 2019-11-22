import React from 'react';
import './flipCard.css';

const styles = {
  card: {
    background: 'transparent',
    flexGrow: 1,
    borderRadius: 20,
    marginLeft: 25,
    marginRight: 25,
    display: 'flex',
    height: '100%'
  }
};

const FlipCard = ({ CardFront, CardBack, className }) => {
  return (
    <div style={styles.card} className={`flipCard ${className}`}>
      <div className="flipCardInner">
        <div className="flipCardFront">
          <CardBack />
        </div>
        <div className="flipCardBack">
          <CardFront />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
