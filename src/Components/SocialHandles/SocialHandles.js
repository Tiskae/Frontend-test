import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import InputField from "../../UI/InputField/InputField";
import * as classes from "./SocialHandles.module.css";

const SocialHandles = (props) => {
  const [state, setState] = useState({
    formData: [
      {
        label: "Choose your Abeg Tag(required)",
        type: "text",
        changed: null,
        required: true,
        placeholder: "@",
      },
      {
        label: "Instagram",
        type: "text",
        changed: null,
        required: true,
        placeholder: "@",
      },
      {
        label: "Twitter",
        type: "text",
        changed: null,
        required: true,
        placeholder: "@",
      },
    ],
  });

  return (
    <div className={classes.SocialHandles}>
      <div className={classes.Heading}>
        <h2>Social Handles</h2>
        <p className={classes.P}>Enter your business social media handles</p>
      </div>
      <form>
        <div className={classes.FormFields}>
          {state.formData.map((el, i) => (
            <div className={classes.Input} key={i}>
              <InputField
                label={el.label}
                type={el.type}
                changed={el.changed}
                required={props.required}
                placeholder={el.placeholder}
              />
            </div>
          ))}
        </div>
        <div className={classes.BtnField}>
          <Button btnType="blue" clicked={props.next}>
            Confirm Social Handles
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SocialHandles;
