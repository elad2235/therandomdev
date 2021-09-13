import React from "react";
import "./hero.styles.scss";

import HeroImage from "../../resources/hero2.jpg";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-header">
            Hi! My Name is Elad and I am a Web Developer!
          </h1>
          <p className="hero-description">
            Software Engineering graduate, experienced in full stack web
            development with JavaScript, NodeJS and React. Looking for a full
            stack junior role that will enable me to demonstrate my knowledge
            and passion for these fields.
          </p>
          <div className="buttons">
            <button className="btn btn--full">Contact me 📲</button>
            <button className="btn btn--outline">Learn more ⬇️</button>
          </div>
        </div>
        <div className="hero-image-container">
          <img className="hero-image" src={HeroImage} alt="Computer Code" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
