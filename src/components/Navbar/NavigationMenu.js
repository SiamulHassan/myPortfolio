"use client";
import Logo from "@/svg/logo";
import Link from "next/link";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navData from "../../data/navLinkData";
// fonts
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
const DmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const NavigationMenu = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar py-4">
        <Container>
          <Link href="#">
            <Logo />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {navData.map((navItem, key) => (
                <Link
                  key={key}
                  href={navItem.url}
                  className={DmSans.className + " " + "mx-5"}
                >
                  {navItem.title}
                </Link>
              ))}
            </Nav>
            <motion.div
              whileHover={{
                scale: 0.9,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <button type="submit" className="btn-primary">
                Submit
              </button>
            </motion.div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationMenu;
