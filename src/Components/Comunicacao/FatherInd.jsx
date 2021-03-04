import React from "react";
import { ChildrenInd } from "./ChildrenInd";

export const FatherInd = () => {
  const getInformation = (name, age, bool) => {
    console.log(name, age, bool);
  };
  return (
    <div>
      <p>Father</p>
      <ChildrenInd buttonAction={getInformation}></ChildrenInd>
    </div>
  );
};
