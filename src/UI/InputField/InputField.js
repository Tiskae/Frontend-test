import React from "react";
import * as classes from "./InputField.module.css";

const InputField = (props) => {
  return (
    <div className={classes.InputField}>
      <label>{props.label}</label>
      <input
        type={props.type}
        maxLength={props.maxLength ? props.maxLength : 524288}
        onChange={props.changed}
        required={props.required ? true : false}
        placeholder={props.placeholder ? props.placeholder : null}
        value={props.value}
      />
    </div>
  );
};

export default InputField;
