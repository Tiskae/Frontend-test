import React from "react";
import * as classes from "./Button.module.css";

const Button = (props) => {
  const btnClasses = [classes.Button];

  if (props.btnType === "blue") {
    btnClasses.push(classes.Blue);
  } else if (props.btnType === "red") {
    btnClasses.push(classes.Red);
  }
  return (
    <button className={btnClasses.join(" ")} disabled={props.disabled} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default Button;
