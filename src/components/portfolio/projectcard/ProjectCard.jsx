import React from "react";
import { Card, Avatar } from "antd";
import "./projectCard.scss";

const { Meta } = Card;

const ProjectCard = ({ id, cover, icon, title, shortDesc }) => {
  return (
    <Card id={id} hoverable style={{}} cover={<img src={cover} />}>
      <Meta
        avatar={<Avatar src={icon} />}
        title={title}
        description={shortDesc}
      />
    </Card>
  );
};

export default ProjectCard;
