import React from "react";
import { Footer } from "../atoms/layout/Footer";
import { Header } from "../atoms/layout/Header";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};
