import React from "react";

const AboutItem = ({ activeItem, setActiveItem, cardItem, cardItemNum }) => {
  const currentActive = cardItemNum === activeItem;
  const handleActive = () => {
    setActiveItem(cardItemNum);
    console.log("card", cardItemNum);
  };
  return (
    <div className="col-lg-6">
      <div
        className={currentActive ? "active-card-item" : "card-item"}
        onClick={handleActive}
      >
        <h3>{cardItem.title}</h3>
        <p>{cardItem.description}</p>
      </div>
    </div>
  );
};

export default AboutItem;
