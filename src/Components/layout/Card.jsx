import React from "react";
import "./Card.css";

export const Card = ({ title, color, children }) => {
  const cardStyle = {
    backgroundColor: color || "#008",
    borderColor: color || "#008",
  };

  return (
    <div className="Card">
      <div className="Title" style={cardStyle}>
        <strong>{title}</strong>
      </div>
      <div className="Content"> {children} </div>
    </div>
  );
};
