import React, { useState, useEffect, useContext } from "react";
import "./portfolio.scss";
import { skillCategory, portFolioData } from "../../lib/dataList";
import { ThemeContext } from "../../context";
import PortfolioModal from "./portfoliomodal/PortfolioModal";

const Portfolio = () => {
  const theme = useContext(ThemeContext);
  const darkTheme = theme.state.darkTheme;
  const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    switch (selected) {
      case "all":
        setData(portFolioData);
        break;
      case "project":
        setData(portFolioData.filter((item) => item.tag === "Project"));
        break;
      case "demo":
        setData(portFolioData.filter((item) => item.tag === "Demo"));
        break;
      default:
        setData(portFolioData);
    }
  }, [selected]);

  const openModal = (item, open, setOpen) => {
    return <PortfolioModal item={item} open={open} setOpen={setOpen} />;
  };

  return (
    <div className={"portfolio " + (darkTheme && "dark")} id="portfolio">
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
            <div
              className="item"
              key={item.title}
              onClick={() => {
                setOpen(true);
                openModal(item);
              }}
            >
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
