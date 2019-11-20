import React from 'react';
import './flipCard.css';

const FlipCard = ({ cardBack: SVG }) => {
  return (
    <div className="flipCard">
      <div className="flipCardInner">
        <div className="flipCardFront">
          <SVG />
        </div>
        <div className="flipCardBack">
          <h1>Commercial Apps</h1>
          <p>Built for companies - internal and external</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
