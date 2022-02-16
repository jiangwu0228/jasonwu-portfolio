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
        "Enterprise website",
        "E-commerce website",
        "Responsive website",
        "Custom development",
        "Secondary development",
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
          <h3>Freelance Web Developer</h3>
          <br/>
          <h2>My Services</h2>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <a href="#contact">
            <button>Get in touch now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
