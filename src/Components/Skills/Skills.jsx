import React from "react";
import "../Skills/Skills.css";
// Skills logos
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/javascript.png";
import reactlogo from "../../assets/react_icon.png";
import wordpress from "../../assets/wordpress.png";
import php from "../../assets/php.png";
import typescript from "../../assets/typescript.png";
import mysql from "../../assets/mysql.png";
import laravel from "../../assets/laravellogo.png"

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="skills_tittle">
        <h1>My Skills</h1>
      </div>
      <div className="skills_lists">
        <img src={reactlogo} alt="React" />
        <img src={wordpress} alt="WordPress" />
        <img src={php} alt="PHP" className="php"/>
        <img src={laravel} alt="" srcset="" />
        <img src={mysql} alt="MySQL" />
        <img src={js} alt="JavaScript" className="javascript" />
        <img src={typescript} alt="TypeScript" className="typescript"/>
        <img src={html} alt="HTML" className="html" />
        <img src={css} alt="CSS" />
       
      </div>
    </div>
  );
};

export default Skills;