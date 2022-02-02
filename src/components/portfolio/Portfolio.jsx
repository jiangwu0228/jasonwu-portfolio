import React, { useState, useEffect, useContext } from "react";
import "./portfolio.scss";
import {
  skillCategory,
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../lib/dataList";
import { ThemeContext } from "../../context";

const Portfolio = () => {
  const theme = useContext(ThemeContext);
  const darkTheme = theme.state.darkTheme;
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
    <div className={"portfolio " + (darkTheme && 'dark')} id="portfolio">
      <h1>Project</h1>
      <ul>
        {skillCategory.map((item) => {
          return (
            <li
              className={
                selected === item.id ? "portfolioList active" : "portfolioList"
              }
              key={item.id}
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
            <div className="item" key={item.title}>
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
