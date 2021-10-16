import React from "react";
import * as classes from "./Content.module.css";
import Navigation from "../Navigation/Navigation";
import VerifyAccount from "../../Components/VerifyAccount/VerifyAccount";

const Content = (props) => {
  return (
    <div className={classes.Content}>
      <Navigation />

      <main className={classes.Main}>
        <p className="paragraph light">Step 2/3</p>
        <VerifyAccount />
      </main>
    </div>
  );
};

export default Content;
