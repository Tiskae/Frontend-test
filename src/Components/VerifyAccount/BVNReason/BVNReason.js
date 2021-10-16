import React from "react";
import * as classes from "./BVNReason.module.css";
import iconLock from "../../../assets/images/icon-lock.png";
import iconArrowUp from "../../../assets/images/icon-arrow-up.png";

const BVNReason = (props) => {
  return (
    <div className={classes.BVNReason}>
      <div className={classes.Heading}>
        <img alt="" src={iconLock} />
        <label>Why we need your BVN</label>
        <button>
          Show
          <span>
            <img alt="" src={iconArrowUp} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default BVNReason;
