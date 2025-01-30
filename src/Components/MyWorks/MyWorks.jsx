import React from "react";
import "../MyWorks/MyWorks.css";
import mywork_data from "../../assets/mywork_data";
import arrowicon from "../../assets/arrow_icon.svg";

const MyWorks = () => {
  return (
    <div className="mywork" id="myworks">
      {/* Section Title */}
      <div className="mywork-title">
        <h1>My Latest Works</h1>
      </div>

      {/* Works Container */}
      <div className="mywork_container">
        {mywork_data.map((work, index) => (
          <a key={index} href={work.w_link} target="_blank" rel="noopener noreferrer">
            <img src={work.image} alt={`Work ${index + 1}`} />
          </a>
        ))}
      </div>

      {/* Show More Button */}
      <div className="show_more_btn">
        <button id="showmore">Show more</button>
        <img src={arrowicon} alt="Arrow Icon" />
      </div>
    </div>
  );
};

export default MyWorks;