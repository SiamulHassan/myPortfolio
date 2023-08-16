import React from "react";
import HeroLeft from "../HeroLeft/HeroLeft";
import HeroRight from "../HeroRight/HeroRight";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <HeroLeft />
          </div>
          <div className="col-lg-6">
            <HeroRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
