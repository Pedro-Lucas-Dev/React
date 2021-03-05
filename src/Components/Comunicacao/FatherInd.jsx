import React, { useState } from "react";
import { ChildrenInd } from "./ChildrenInd";

export const FatherInd = () => {
  const [name, setName] = useState("?");
  const [age, setAge] = useState(0);
  const [bool, setBool] = useState(false);

  const getInformation = (name, age, bool) => {
    setName(name);
    setAge(age);
    setBool(bool);
  };
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{bool ? "true" : "false"}</p>
      <ChildrenInd buttonAction={getInformation}></ChildrenInd>
    </div>
  );
};
