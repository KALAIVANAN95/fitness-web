import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import rightarrow from "../../assets/rightArrow.png";
const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/* header */}
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      <div className="program-categories">
        {programsData.map((programs) => {
          let { image, heading, details } = programs;
          return (
            <div className="category">
              {image}
              <span>{heading}</span>
              <span>{details}</span>

              <div className="join-now">
                <span>Join Now</span>
                <img src={rightarrow} alt="rightarrow" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
