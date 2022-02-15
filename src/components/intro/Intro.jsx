import React, { useEffect, useRef, useContext } from "react";
import "./intro.scss";
import { init } from "ityped";
import { ThemeContext } from "../../context";
import { services } from "../../lib/dataList";

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
        "Web Developer",
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
          <h2>My Services</h2>
          <ul>
            {services.map((item, key) => {
              return (
                <li key={key}>
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
          <a href="#contact">
            <button>get in touch</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
