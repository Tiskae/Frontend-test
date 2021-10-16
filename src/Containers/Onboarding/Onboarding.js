import React from "react";
import * as classes from "./Onboarding.module.css";
import Button from "../../UI/Button/Button";
import Content from "../Content/Content";

const Onboarding = () => {
  return (
    <div className={classes.Onboarding}>
      <div className={classes.BtnRow}>
        <Button btnType="red">Logout</Button>
      </div>
      <Content />
    </div>
  );
};

export default Onboarding;
