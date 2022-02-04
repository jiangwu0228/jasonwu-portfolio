import React, { useState, useEffect, useContext } from "react";
import "./portfolio.scss";
import {
  skillCategory,
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
  portFolioData,
} from "../../lib/dataList";
import { ThemeContext } from "../../context";

import { Tabs } from "antd";

import ProjectCard from './projectcard/ProjectCard';

const { TabPane } = Tabs;

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

  function callback(key) {
    console.log(key);
  }

  return (
    <div className={"portfolio " + (darkTheme && "dark")} id="portfolio">
      <h1>Project</h1>
      {/* <ul>
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
      </div> */}
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="All" key="1">
          {portFolioData.map((item) => {
            return (
              <ProjectCard
                key={item.id}
                cover={item.img}
                icon={item.icon}
                title={item.title}
                shortDesc={item.shortDesc}
              />
            );
          })}
        </TabPane>
        <TabPane tab="Project" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Demo" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Portfolio;
