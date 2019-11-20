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

const FlipCard = ({
  cardFront: CardFront,
  cardBack: CardBack,
  className: className
}) => {
  return (
    <div style={styles.card} className={`flipCard ${className}`}>
      <div className="flipCardInner">
        <div className="flipCardFront">
          <CardBack />
        </div>
        <div className="flipCardBack">
          <h1>{CardFront}</h1>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
