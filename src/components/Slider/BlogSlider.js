"use client";
import Link from "next/link";
import React from "react";
import sliderOne from "../../svg/slider-1.png";
import Image from "next/image";
import Slider from "react-slick";
const BlogSlider = () => {
  return (
    <div>
      <div className="blog-heading d-flex align-items-center flex-column">
        <h1>Latest Blog</h1>
        <p className="blog-description">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised.
        </p>
      </div>
      <div className="container">
        <Slider>
          <div className="blog-slider">
            <Image src={sliderOne} alt="img-one" />
            <p className="date">10 jan</p>
            <h2>Bitcoin and Econokic Freedom</h2>
            <Link href="#">Read More</Link>
          </div>
          <div className="blog-slider">
            <Image src={sliderOne} alt="img-one" />
            <p className="date">10 jan</p>
            <h2>Bitcoin and Econokic Freedom</h2>
            <Link href="#">Read More</Link>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default BlogSlider;
