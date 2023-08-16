"use client";
import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-success-left">
              <h2>
                Failure is The Power that Gives <span>Success</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-success-right">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised.
              </p>
              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                transition={{ type: "spring", stiffness: 800 }}
              >
                <button type="submit" className="btn-primary">
                  Download Now
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
