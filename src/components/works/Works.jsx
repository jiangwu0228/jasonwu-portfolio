import React, { useState, useEffect, useContext, useRef } from "react";
import "./works.scss";
import { worksCategory, worksData } from "../../lib/dataList";
import { ThemeContext } from "../../context";
import PortfolioModal from "./works/PortfolioModal";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Works = () => {
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
        setData(worksData);
        break;
      case "works":
        setData(worksData.filter((item) => item.tag === "Works"));
        break;
      case "projects":
        setData(worksData.filter((item) => item.tag === "Projects"));
        break;
      case "demos":
        setData(worksData.filter((item) => item.tag === "Demos"));
        break;
      default:
        setData(worksData);
    }
  }, [selected]);

  return (
    <div className={"works " + (darkTheme && "dark")} id="works">
      <h1>My Works</h1>
      <ul>
        {worksCategory.map((item) => {
          return (
            <li
              className={
                selected === item.id ? "worksList active" : "worksList"
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
            // <Paper
            //   elevation={5}
            //   className="item"
            //   key={item.title}
            //   onClick={() => {
            //     handleOpen();
            //     setCurrent(item);
            //   }}
            // >
            //   <img src={item.img} alt="" />
            //   <h3>{item.title}</h3>
            // </Paper>
            <Card
              onClick={() => {
                handleOpen();
                setCurrent(item);
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  // height="140"
                  image={item.img}
                  alt={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.shortDesc}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
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
                    <h3>Key Skills</h3>
                    {current.tech?.map((item) => {
                      return <Chip size="small" label={item} />;
                    })}
                  </div>
                  <div className="box-right">
                    <a
                      href={current.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Link>
                        <h2>{current.title}</h2>
                      </Link>
                    </a>
                    <h3>Situation:</h3>
                    <p>{current.situation}</p>
                    <h3>Task:</h3>
                    <p>{current.task}</p>
                    <h3>Action:</h3>
                    <ul>
                      {current.action?.map((item, key) => {
                        return (
                          <li>
                            {key + 1}. {item}
                          </li>
                        );
                      })}
                    </ul>
                    <h3>Result:</h3>
                    <p>{current.result}</p>
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

export default Works;
