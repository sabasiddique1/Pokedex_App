import React from "react";
import NavBar from "../NavBar/navBar";
import "./wrapper.css";

const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">
      <NavBar />
      <div className="content">{children}</div>
    </div>
  );
};

export default Wrapper;
