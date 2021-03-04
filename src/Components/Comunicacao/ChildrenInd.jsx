import React from "react";

export const ChildrenInd = ({ buttonAction }) => {
  return (
    <div>
      <p>Son</p>
      <button onClick={() => buttonAction("João", 53, true)}>
        information
      </button>
    </div>
  );
};
