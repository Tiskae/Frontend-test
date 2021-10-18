import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import InputField from "../../UI/InputField/InputField";
import * as classes from "./SocialHandles.module.css";

const SocialHandles = (props) => {
  const [tags, setTags] = useState({
    abegTag: "",
    instagramTag: "",
    twitterTag: "",
  });

  const abegTagChangedHandler = (event) => {
    const val = event.target.value.trim();
    setTags({ ...tags, abegTag: val });
  };

  const instagramTagChangedHandler = (event) => {
    const val = event.target.value.trim();
    setTags({ ...tags, instagramTag: val });
  };

  const twitterTagChangedHandler = (event) => {
    const val = event.target.value.trim();
    setTags({ ...tags, twitterTag: val });
  };

  const formData = [
    {
      label: "Choose your Abeg Tag(required)",
      type: "text",
      changed: null,
      required: true,
      placeholder: "@",
      changed: abegTagChangedHandler,
      value: tags.abegTag,
    },
    {
      label: "Instagram",
      type: "text",
      changed: null,
      required: true,
      placeholder: "@",
      changed: instagramTagChangedHandler,
      value: tags.instagramTag,
    },
    {
      label: "Twitter",
      type: "text",
      changed: null,
      required: true,
      placeholder: "@",
      changed: twitterTagChangedHandler,
      value: tags.twitterTag,
    },
  ];

  return (
    <div className={classes.SocialHandles}>
      <div className={classes.Heading}>
        <h2>Social Handles</h2>
        <p className={classes.P}>Enter your business social media handles</p>
      </div>
      <form>
        <div className={classes.FormFields}>
          {formData.map((el, i) => (
            <div className={classes.Input} key={i}>
              <InputField
                label={el.label}
                type={el.type}
                changed={el.changed}
                required={props.required}
                placeholder={el.placeholder}
                changed={el.changed}
              />
            </div>
          ))}
        </div>
        <div className={classes.BtnField}>
          <Button btnType="blue" disabled={!tags.abegTag} clicked={props.next}>
            Confirm Social Handles
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SocialHandles;
