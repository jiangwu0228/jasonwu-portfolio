import React, { useState, useEffect } from "react";
import "./portfolio.scss";
import {
  skillCategory,
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../lib/portfolioList";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {skillCategory.map((item) => {
          return (
            <li
              className={
                selected === item.id ? "portfolioList active" : "portfolioList"
              }
              onClick={() => setSelected(item.id)}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
      <div className="container">
        {data.map((item) => {
          return (
            <div className="item">
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
