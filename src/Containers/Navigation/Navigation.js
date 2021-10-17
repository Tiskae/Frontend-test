import React from "react";
import * as classes from "./Navigation.module.css";
import NavEl from "../../Components/NavEl/NavEl";

const Navigation = (props) => {
  return (
    <div className={classes.Navigation}>
      <NavEl
        number="1"
        title="Verify Account"
        isActive={props.currentSlide === 1}
        isCompleted={props.currentSlide > 1}
      />
      <NavEl
        number="2"
        title="Social Handles"
        isActive={props.currentSlide === 2}
        isCompleted={props.currentSlide > 2}
      />
      <NavEl
        number="3"
        title="Business Category"
        isActive={props.currentSlide === 3}
        isCompleted={props.completed}
      />
    </div>
  );
};

export default Navigation;
