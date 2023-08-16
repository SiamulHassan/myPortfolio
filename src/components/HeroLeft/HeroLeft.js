"use client";
import React from "react";
import { motion } from "framer-motion";
import InstagramLight from "@/svg/instagramLight";
import Behance from "@/svg/behance";
import Dribble from "@/svg/dribble";
const HeroLeft = () => {
  const topToBottom = {
    hidden: {
      y: -15,
      opacity: 0,
    },

    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <motion.div
        className="hero-content"
        initial={topToBottom.hidden}
        whileInView={topToBottom.visible}
        viewport={{ once: true }}
        variants={topToBottom}
        transition={{ duration: 0.3, ease: "easeIn" }}
      >
        <div className="hero-heading">
          <span className="hero-creative">Creative</span> Design and Work
          <span className="hero-solution">Solution</span>
        </div>
        <p className="hero-description">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered.
        </p>
        <div className="hero-btns d-flex gap-5 align-items-center">
          {/* use different animation here---framer */}
          <motion.button
            type="submit"
            className="btn-primary"
            whileHover={{
              scale: 0.9,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.7 }}
          >
            Say Hello
          </motion.button>
          <div className="arrow-animation d-flex align-items-center gap-4">
            <a href="#" className="hero-btns--work">
              My Work
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4.5 19.5L19.5 4.5M19.5 4.5L8.25 4.5M19.5 4.5L19.5 15.75"
                stroke="#313131"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="follow-me d-flex align-items-center gap-5">
          <span>Follow me on</span>
          <div className="follow-icons d-flex align-items-center gap-4">
            <motion.div
              initial={{ translateX: -10 }}
              animate={{ translateX: 0 }}
              transition={{
                repeat: Infinity,
                ease: "easeOut",
                duration: 2,
                repeatType: "reverse",
                repeatDelay: 0.1,
              }}
            >
              <Behance />
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Dribble />
            </motion.div>
            <motion.div
              initial={{ translateY: 0 }}
              animate={{
                translateY: -30,
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatType: "reverse",
              }}
            >
              <InstagramLight />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HeroLeft;
