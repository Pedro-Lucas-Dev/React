import React from "react";
import { Children } from "./Children";

export const Father = (props) => {
  return (
    <div>
      <Children name="Lucas" age={15} bool={true} />
      <Children name="Bia" age={35} bool={false} />
    </div>
  );
};
