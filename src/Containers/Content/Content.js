import React, { useState } from "react";
import * as classes from "./Content.module.css";
import Navigation from "../Navigation/Navigation";
import VerifyAccount from "../../Components/VerifyAccount/VerifyAccount";
import SocialHandles from "../../Components/SocialHandles/SocialHandles";
import BusinessCategory from "../../Components/BusinessCategory/BusinessCategory";

const Content = (props) => {
  const [state, setState] = useState({
    currSlide: 1,
    totalSlide: 3,
    isCompleted: false,
  });

  const moveToNextSlide = () =>
    setState({
      ...state,
      currSlide: state.currSlide + 1,
    });

  const submit = () => {
    console.log("Submitted!!!!!");
    setState({ ...state, isCompleted: true });
  };

  let content;
  if (state.currSlide === 1) content = <VerifyAccount next={moveToNextSlide} />;
  if (state.currSlide === 2) content = <SocialHandles next={moveToNextSlide} />;
  if (state.currSlide === 3) content = <BusinessCategory submit={submit} />;

  return (
    <div className={classes.Content}>
      <Navigation
        currentSlide={state.currSlide}
        completed={state.isCompleted}
      />

      <main className={classes.Main}>
        <p className="paragraph light">
          Step {state.currSlide}/{state.totalSlide}
        </p>
        {content}
      </main>
    </div>
  );
};

export default Content;
