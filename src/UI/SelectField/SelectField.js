import React from "react";
import * as classes from "./SelectField.module.css";

const SelectField = (props) => {
  return (
    <div className={classes.SelectField}>
      <label>{props.title}</label>
      <div className={classes.SelectContainer}>
        {props.options.map((el, i) => (
          <div key={i} className={classes.Select}>
            <label htmlFor={el.value}>{el.label}</label>
            <input
              checked={i === 0 ? true : false}
              id={el.value}
              type="radio"
              name={props.title}
              onChange={() => props.changed(el.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectField;
