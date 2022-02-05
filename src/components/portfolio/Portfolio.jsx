import React, { useState, useEffect, useContext, useRef } from "react";
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
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Portfolio = () => {
  const theme = useContext(ThemeContext);
  const darkTheme = theme.state.darkTheme;
  const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState({});

  const [scroll, setScroll] = useState("paper");

  const handleOpen = () => {
    setOpen(true);
    // setScroll(scrollType);
  };

  const handleClose = () => setOpen(false);

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

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
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="body"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Box>
              <div className="box-container">
                <div className="box-img">
                  <img src={current.img} alt="" />
                </div>
                <div className="box-section">
                  <div className="box-left">
                    {current.tech?.map((item) => {
                      return <Chip size="small" label={item} style={{}} />;
                    })}
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
                      </Link>
                    </a>
                    <p>{current.description}</p>
                  </div>
                </div>
              </div>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Portfolio;
