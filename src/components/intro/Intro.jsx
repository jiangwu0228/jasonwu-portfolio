import React, { useEffect, useRef, useContext } from "react";
import "./intro.scss";
import { init } from "ityped";
import { ThemeContext } from "../../context";

const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkTheme = theme.state.darkTheme;
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1000,
      backSpeed: 50,
      strings: [
        "Frontend Developer",
        // "Backend Developer",
        // "Fullstack Developer",
      ],
    });
  }, []);
  return (
    <div className={"intro " + (darkTheme && "dark")} id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="https://i.ibb.co/YT0w0JQ/man.png" alt="man" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Jason Wu</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <div className="skill">
          <h1>Key Technical Skills</h1>
          <div className="skillCol">
            <img src="https://i.ibb.co/sJ7fxv2/html.png" alt="" />
            <img src="https://i.ibb.co/ZcVc2cW/css-3.png" alt="" />
            <img src="https://i.ibb.co/BfsbD88/js.png" alt="" />
          </div>
          <div className="skillCol">
            <img src="https://i.ibb.co/M70R2Nm/typescript.png" alt="" />
            <img src="https://i.ibb.co/HdjCd9w/sass.png" alt="" />
            <img src="https://i.ibb.co/Gn1ZxYG/tailwind.png" alt="" />
          </div>
          <div className="skillCol">
            <img src="https://i.ibb.co/rft20TC/react.png" alt="" />
            <img src="https://i.ibb.co/r4wSr0Y/nextjs.png" alt="" />
            <img src="https://i.ibb.co/z6xP4zN/angular.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
