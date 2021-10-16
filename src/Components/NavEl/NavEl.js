import React from "react";
import * as classes from "./NavEl.module.css";

const NavEl = (props) => {
  const styleClasses = [classes.NavEl];
  if (props.isActive) {
    styleClasses.push(classes.Active);
  }
  if (props.isCompleted) {
    styleClasses.push(classes.Completed);
  }

  return (
    <div className={styleClasses.join(" ")}>
      <span className={classes.Number}>
        <p>{props.number}</p>
      </span>
      <h3 className={classes.Title}>{props.title}</h3>
    </div>
  );
};

export default NavEl;
