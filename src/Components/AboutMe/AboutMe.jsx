import React from "react";
import "../AboutMe/AboutMe.css";
import my_image from "../../assets/my_image.jpg";

const AboutMe = () => {
  return (
    <div className="aboutme" id="aboutme">
      <div className="about_tittle">
        <h1>About Me</h1>
      </div>
      <div className="about_sections">
        <div className="about_section_left">
          <img src={my_image} alt="Profile" />
        </div>
        <div className="about_section_right">
          <div className="about_details">
            <p>
              I am a Frontend Developer with one year of experience, currently
              working at Tron Digital. I specialize in building responsive,
              user-friendly, and visually appealing web applications, with a
              strong focus on writing clean, efficient code and delivering
              seamless user experiences that align with modern design principles.
            </p>
            <p>
              I also train aspiring developers in web development at Tron
              Academy, equipping them with the knowledge and skills to create
              responsive, dynamic, and visually engaging websites and
              applications, fostering their growth into proficient web
              developers.
            </p>
          </div>
          <div className="about_my_achievements">
            <div className="about_achievements">
              <h1>1+</h1>
              <p>YEARS OF EXPERIENCE</p>
            </div>
            {/* <hr style={{ border: "1px solid #398AA5" }} /> */}
            <div className="about_achievements">
              <h1>15+</h1>
              <p>PROJECTS COMPLETED</p>
            </div>
            {/* <hr style={{ border: "1px solid #398AA5" }} /> */}
            <div className="about_achievements">
              <h1>10+</h1>
              <p>HAPPY CLIENTS</p>
            </div>
            {/* <hr style={{ border: "1px solid #398AA5" }} /> */}
            <div className="about_achievements">
              <h1>50+</h1>
              <p>STUDENTS TRAINED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;