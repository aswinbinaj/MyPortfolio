import React from "react";
import "../Hero/Hero.css";
import my_image from "../../assets/my_image.jpg";
import WhatsApp from "../WhatsApp";

const Hero = () => {
  const handleDownloadResume = () => {
    const pdfUrl = "/Aswin Binaj_Web_Developer_resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Aswin_Binaj_Web_Developer_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <WhatsApp />
        </div>
        <div className="resume_button">
          <button onClick={handleDownloadResume}>Download my Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
