"use client";
import React, { useState } from "react";
import AboutItem from "./AboutItem";
import AboutDescription from "./AboutDescription";
import aboutCardData from "@/data/aboutCardData";
const AboutCard = () => {
  const [activeItem, setActiveItem] = useState(0);
  const activeItemContentNum = activeItem;
  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="row about-item">
              {aboutCardData.map((cardItem, i) => (
                <AboutItem
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                  cardItem={cardItem}
                  cardItemNum={i}
                  key={cardItem.aboutTitle}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-description">
              <AboutDescription activeItemContentNum={activeItemContentNum} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
