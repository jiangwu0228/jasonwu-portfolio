import React, { useState, useContext } from "react";
import "./skills.scss";
import { ThemeContext } from "../../context";
import { skillsImg } from "../../lib/dataList";

const Skills = () => {
  const theme = useContext(ThemeContext);
  const darkTheme = theme.state.darkTheme;

  return (
    <div className={"skills " + (darkTheme && "dark")} id="skills">
      <h1>Skills</h1>
      <div className="skills-container">
        {skillsImg.map((item, key) => {
          return (
            <div className="skill" key={key}>
              <img src={item.img} alt="" />
              <h2>{item.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
