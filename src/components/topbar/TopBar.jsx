import React from "react";
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left" >
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
        <div className="right">this is right</div>
      </div>
    </div>
  );
};

export default TopBar;
