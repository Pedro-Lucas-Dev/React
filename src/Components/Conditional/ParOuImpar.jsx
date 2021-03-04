import React from "react";

export const ParOuImpar = ({ number }) => {
  const isPar = number % 2 === 0;

  return (
    <div>
      <p>{number}</p>
      {isPar ? <span> É Par </span> : <span> É Ímpar </span>}
    </div>
  );
};
