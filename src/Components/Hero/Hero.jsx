import React from "react";
import "../Hero/Hero.css";
import my_image from "../../assets/my_image.jpg";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <img src={my_image} alt="Profile" className="my_profile" />
      <h1>
        <span>I'm Aswin Binaj</span> <br /> Web Developer based in Kerala
      </h1>
      <p>
        A skilled web developer with 1 year of experience specializing in React
        and WordPress, complemented by a strong understanding of backend
        technologies and a passion for creating dynamic, user-friendly websites
        and applications.
      </p>
      <div className="hero_buttons">
        <div className="contact_button">
          <button>Connect with me</button>
        </div>
        <div className="resume_button">
          <button>Download my Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;