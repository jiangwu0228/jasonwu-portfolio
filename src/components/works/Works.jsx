import React, { useState, useContext } from "react";
import "./works.scss";
import { ThemeContext } from "../../context";
import { skillsImg } from "../../lib/dataList";

const Works = () => {
  const theme = useContext(ThemeContext);
  const darkTheme = theme.state.darkTheme;

  return (
    <div className={"works " + (darkTheme && "dark")} id="works">
      <h1>Skills</h1>
      <div className="skills">
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

export default Works;
