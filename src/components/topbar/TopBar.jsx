import React, { useContext } from "react";
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import { ThemeContext } from "../../context";

const TopBar = ({ menuOpen, setMenuOpen }) => {
  const theme = useContext(ThemeContext);
  const darkTheme = theme.state.darkTheme;
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className={"topbar " + (darkTheme && "dark")}>
      <div className={"wrapper " + (menuOpen && "active")}>
        <div className="left">
          <a href="#intro" className="logo">
            Jason Wu
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>021 163 1412</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span> jasonwu@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="link">
            <a href="https://www.linkedin.com/in/jiang-wu-729450222/">
              <img src="assets/linkedin.png" alt="" />
            </a>
            <a href="https://github.com/jiangwu0228">
              <img src="assets/github.png" alt="" />
            </a>
          </div>
          <div className="toggle">
            {theme.state.darkTheme ? (
              <img src="assets/brightness.svg" alt="" onClick={handleClick} />
            ) : (
              <img src="assets/moon.svg" alt="" onClick={handleClick} />
            )}
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
