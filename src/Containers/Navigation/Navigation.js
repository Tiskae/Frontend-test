import React from "react";
import * as classes from "./Navigation.module.css";
import NavEl from "../../Components/NavEl/NavEl";

const Navigation = (props) => {
  return (
    <>
      <div className={classes.Navigation}>
        <NavEl number="1" title="Verify Account" isCompleted={true} />
        <NavEl number="2" title="Social Handles" isActive />
        <NavEl number="3" title="Business Category" />
      </div>
      <hr />
    </>
  );
};

export default Navigation;
