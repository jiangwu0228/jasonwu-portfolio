import React, { useState } from "react";
import "./works.scss";
import { workData } from "../../lib/dataList";

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleClick = (e) => {
    e === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(
          currentSlide < workData.length - 1 ? currentSlide + 1 : 0
        );
  };
  console.log(currentSlide);
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {workData.map((data) => {
          return (
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={data.icon} alt="" />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.desc}</p>
                    <span>Projects</span>
                  </div>
                </div>
                <div className="right">
                  <img
                    src={data.img}
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
};

export default Works;
