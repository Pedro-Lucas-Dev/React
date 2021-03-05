import React, { useState } from "react";

export const Mega = ({ min, max }) => {
  const [numbers, setNumbers] = useState([]);
  const randomNumbers = () => {
    const getNumbers = [1, 2, 3, 4, 5, 6];
    const arrayNumber = getNumbers.map((number) => {
      return parseInt(Math.random() * (max - min) + min);
    });
    setNumbers(arrayNumber);
  };

  return (
    <div>
      <div>{numbers.join(" - ")}</div>
      <button onClick={randomNumbers}> Gerar Número </button>
    </div>
  );
};
