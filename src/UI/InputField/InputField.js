import React from "react";
import * as classes from "./InputField.module.css";

const InputField = (props) => {
  return (
    <div className={classes.InputField}>
      <label>{props.label}</label>
      <input
        type={props.type}
        maxLength={props.maxLength ? props.maxLength : null}
        onChange={props.changed}
      />
    </div>
  );
};

export default InputField;
