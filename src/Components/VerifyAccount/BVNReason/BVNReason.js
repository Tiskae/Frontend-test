import React, { useState } from "react";
import * as classes from "./BVNReason.module.css";
import iconLock from "../../../assets/images/icon-lock.png";
import iconPadlock from "../../../assets/images/icon-padlock.png";
import iconArrowUp from "../../../assets/images/icon-arrow-up.png";

const BVNReason = (props) => {
  const [showDetails, setDetails] = useState(false);

  return (
    <div className={classes.BVNReason}>
      <div className={classes.Heading}>
        <img alt="" src={iconLock} />
        <label>Why we need your BVN</label>
        <button onClick={() => setDetails(!showDetails)}>
          {showDetails ? "Hide" : "Show"}
          <span>
            <img alt="" src={iconArrowUp} />
          </span>
        </button>
      </div>
      {showDetails ? (
        <div className={classes.Details}>
          <p>We only need access to your:</p>
          <ul>
            <li>Full Name</li>
            <li>Phone Number</li>
            <li>Date of Birth</li>
          </ul>
          <hr />
          <p className={classes.Note}>
            <span>
              <img alt="" src={iconPadlock} />
            </span>
            <span>
              Your BVN does not give us access to your bank accounts or
              transactions
            </span>
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default BVNReason;
