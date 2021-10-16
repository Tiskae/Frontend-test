import React from "react";
import * as classes from "./Layout.module.css";
import heroImg from "../../assets/images/hero-image.png";

const Layout = (props) => (
  <div className={classes.Layout}>
    <div className={classes.Hero}>
      <img className={classes.HeroImage} alt="" src={heroImg} />
    </div>
    <div className={classes.Content}>{props.children}</div>
  </div>
);

export default Layout;
