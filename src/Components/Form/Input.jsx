import React, { useState } from "react";
import "./Input.css";

export const Input = () => {
  const [value, setValue] = useState("start");
  const getValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="Input">
      <h3>{value}</h3>
      <input
        value={value}
        onChange={getValue}
        style={{ display: "flex", flexDirection: "column" }}
      />
      <input
        value={value}
        readOnly
        style={{ display: "flex", flexDirection: "column" }}
      />
      <input
        value={undefined}
        style={{ display: "flex", flexDirection: "column" }}
      />
    </div>
  );
};
