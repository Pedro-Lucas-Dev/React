import React from "react";

export const Buttons = ({ setInc, setDec }) => {
  return (
    <div>
      <button onClick={setInc}> + </button>
      <button onClick={setDec}> - </button>
    </div>
  );
};
