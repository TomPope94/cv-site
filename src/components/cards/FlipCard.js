import React from "react";
import "./flipCard.css";

const styles = {
  card: {
    background: "transparent",
    flexGrow: 1,
    borderRadius: 20,
    marginLeft: 25,
    marginRight: 25,
    height: "100%"
  }
};

const FlipCard = ({ cardBack: SVG, className: className }) => {
  return (
    <div style={styles.card} className={`flipCard ${className}`}>
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