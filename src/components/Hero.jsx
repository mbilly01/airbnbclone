import React from "react";
import img from '../img/hero.PNG';
const Hero = () => {
  return (
    <section className="hero">
      <img src={img} alt="" srcset="" />
      <section className="hero-text">
      <h1>Online Experiences</h1>
      <p>Join Unique Interactive Activities Led By One-Of-A-Kind Hosts.
        All Without Leaving Home
      </p>
      </section>
    
    </section>
  );
}

export default Hero;