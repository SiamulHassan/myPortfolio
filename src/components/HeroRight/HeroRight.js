"use client";
import Image from "next/image";

import React from "react";
import profileImg from "../../svg/profile.png";
import { motion } from "framer-motion";
const HeroRight = () => {
  const fromLeft = {
    initial: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div>
      <motion.div
        className="profile-img-container"
        initial={fromLeft.initial}
        whileInView={fromLeft.visible}
        transition={{ duration: 0.3, ease: "easeIn" }}
      >
        <Image src={profileImg} width={400} height={400} alt="profile-img" />
      </motion.div>
    </div>
  );
};

export default HeroRight;
