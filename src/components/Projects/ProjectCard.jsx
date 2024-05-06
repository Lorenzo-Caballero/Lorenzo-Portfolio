import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, subDescription, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" style={{ display: "flex", flexDirection: "column" }}>
        <img src={imgUrl} style={{ flex: "1", minWidth: "0" }} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}<br/>{subDescription}</span>
        </div>
      </div>
    </Col>
  );
};
