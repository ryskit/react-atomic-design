import React from "react";
import { Header } from "../atoms/layout/Header";

export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
};
