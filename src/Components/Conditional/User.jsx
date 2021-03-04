import React from "react";
import { If } from "./If";

export const User = ({ user }) => {
  return (
    <div>
      <If test={user && user.name}>
        Welcome <strong> {user.name}</strong>!
      </If>
      <If test={!user || !user.name}>
        Welcome <strong> User {user.email} </strong>!
      </If>
    </div>
  );
};
