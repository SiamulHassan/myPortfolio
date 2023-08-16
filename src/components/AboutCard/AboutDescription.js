import Link from "next/link";
import React from "react";
import aboutDescriptionData from "../../data/aboutDesData";
const AboutDescription = ({ activeItemContentNum }) => {
  return (
    <>
      {aboutDescriptionData.map(
        (desData, i) =>
          i === activeItemContentNum && (
            <React.Fragment key={i}>
              <h3>{desData.title}</h3>
              <p>{desData.description}</p>
              <Link href={desData.link}>Visit Now</Link>
            </React.Fragment>
          )
      )}
    </>
  );
};

export default AboutDescription;
