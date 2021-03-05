import React from "react";

export const ChildrenInd = ({ buttonAction }) => {
  const randomAge = () => parseInt(Math.random() * 80) + 20;
  return (
    <div>
      <p>Son</p>
      <button onClick={() => buttonAction("João", randomAge(), true)}>
        information
      </button>
    </div>
  );
};
