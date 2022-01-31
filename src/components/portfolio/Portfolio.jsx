import React from "react";
import "./portfolio.scss";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">React</li>
        <li>Angular</li>
        <li>Vue</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="./assets/panda.png" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="./assets/panda.png" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="./assets/panda.png" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="./assets/panda.png" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="./assets/panda.png" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="./assets/panda.png" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="./assets/panda.png" alt="" />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
