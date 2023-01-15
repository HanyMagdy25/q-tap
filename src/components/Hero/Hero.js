import React from "react";
import heroImg from "../../assets/hero.png";
import "./Hero.css"
function Hero() {
  return (
    <section className="hero">
      <div className="hero-container container">
        <div className="row">
          <div className="hero__content col-12 col-md-6">
            <h1>Q TAP</h1>
            <h1>Smart .. Easy .. Safe</h1>
            <p>
              Lorem ipsum dolor sit amet,consectetur adipiscing elitut aliquip
              ex ea commodo consequat
            </p>
            <button className="btn btn-custom">Get Started</button>
          </div>
          <div className="col-12 col-md-6">
            <img src={heroImg} alt="logo" className="imageContain" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
