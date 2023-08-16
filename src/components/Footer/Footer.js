"use client";
import React from "react";
import { dmSans } from "@/app/layout";
import Logo from "@/svg/logo";
import PlaneIcon from "../../svg/planeIcon";
// service data
import { serviceData } from "./footerData";
// service resource data
import { resourceData } from "./footerData";
import Link from "next/link";
import FbIcon from "@/svg/fbIcon";
import InstagramIcon from "@/svg/instagramIcon";
import TwiteerIcon from "@/svg/twiteerIcon";
import PinterestIcon from "@/svg/pinterestIcon";
// motion
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className={dmSans.className + " " + "footer-section"}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer-logo">
              <Logo />
              <p>
                There are many variations of passages of available, but the
                majority have suffered.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-service partial-font">
              <h2>Services</h2>
              {serviceData.map((serviceItem, key) => (
                <Link href={serviceItem.url} key={key}>
                  {serviceItem.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-resource partial-font">
              <h2>Services</h2>
              {resourceData.map((resourceItem, key) => (
                <Link href={resourceItem.url} key={key}>
                  {resourceItem.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-newsletter partial-font">
              <h2>Newsletter</h2>
              <p>Subscribe for our upcoming latest address and resources</p>
              <div className="send-email d-flex align-items-center">
                <input placeholder="email" />
                <button>
                  <PlaneIcon />
                </button>
              </div>
              <div className="footer-icons d-flex gap-4">
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="footer-icon-wrapper">
                    <FbIcon />
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="footer-icon-wrapper">
                    <InstagramIcon />
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="footer-icon-wrapper">
                    <TwiteerIcon />
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="footer-icon-wrapper">
                    <PinterestIcon />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
