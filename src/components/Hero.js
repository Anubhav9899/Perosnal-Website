import React from "react";
import heroImage from "../image/shubham-dhage-5OTqYa9uBZk-unsplash.jpg";

import "./Hero.css"; // Assuming you have a CSS file for the hero section

const Hero = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
      }}
    >
      <h1>
        Innovating at the Intersection of Web Development and Machine Learning
      </h1>
      <p>Crafting Code with a Focus on Performance and Intelligence</p>
    </div>
  );
};

export default Hero;
