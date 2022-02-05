import React, { useState, useEffect, useContext } from "react";
import "./portfolio.scss";
import { skillCategory, portFolioData } from "../../lib/dataList";
import { ThemeContext } from "../../context";
import PortfolioModal from "./portfoliomodal/PortfolioModal";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const Portfolio = () => {
  const theme = useContext(ThemeContext);
  const darkTheme = theme.state.darkTheme;
  const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

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
                console.log(item);
                handleOpen();
                setCurrent(item);
              }}
            >
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
            </div>
          );
        })}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box>
            <div className="box-container">
              <div className="box-img">
                <img src={current.img} alt="" />
              </div>
              <div className="box-section">
                <div className="box-left">
                  <div className="tag">tag</div>
                </div>
                <div className="box-right">
                  <h2>{current.title}</h2>
                  <a
                    href={current.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Link>
                      <span>link</span>
                      <span>{current.link}</span>
                    </Link>
                  </a>
                  <p>{current.description}</p>
                </div>
              </div>
              <div className="box-button">
                <Button onClick={handleClose}>Close</Button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
      {/* <PortfolioModal current={current} open={open} handleClose={()=>{handleClose}} /> */}
    </div>
  );
};

export default Portfolio;
