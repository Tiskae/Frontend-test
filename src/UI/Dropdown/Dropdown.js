import React from "react";
import * as classes from "./Dropdown.module.css";

const Dropdown = (props) => {
  return (
    <div className={classes.Dropdown}>
      <label>{props.label}</label>
      <div className={classes.SelectField}>
        <select onChange={props.changed} value={props.value}>
          <option>{props.default}</option>
          {props.options.map((el, i) => (
            <option key={i}>{el}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
