import React from "react";

export const Children = ({ name, age, bool }) => {
  return (
    <div>
      <span>{name} </span>
      <span>{age} </span>
      <span>{bool ? "True" : "false"}!</span>
    </div>
  );
};
