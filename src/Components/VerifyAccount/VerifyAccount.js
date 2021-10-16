import React, { useState } from "react";
import SelectField from "../../UI/SelectField/SelectField";
import InputField from "../../UI/InputField/InputField";
import * as classes from "./VerifyAccount.module.css";
import BVNReason from "./BVNReason/BVNReason";
import Button from "../../UI/Button/Button";

const VerifyAccount = (props) => {
  const [state, setState] = useState({
    verificationMethod: "bvn",
    bvn: null,
    accountNumber: null,
    bank: null,
  });

  const verificationMethodChanged = (value) => {
    setState({ ...state, verificationMethod: value });
    console.log(value);
  };

  return (
    <div className={classes.VerifyAccount}>
      <h2>Verify Account</h2>
      <div className={classes.SelectField}>
        <SelectField
          title="Select a verification method"
          options={[
            { label: "BVN", value: "bvn" },
            { label: "Personal Account Number", value: "pan" },
          ]}
          changed={verificationMethodChanged}
        />
      </div>

      <div className={classes.InputField}>
        <InputField
          label="Bank Verification Number (11-digits)"
          type="number"
          maxLength="11"
          changed={null}
        />
      </div>

      <BVNReason />
      <hr />
      <div className={classes.BtnField}>
        <Button btnType="blue">Continue</Button>
      </div>
    </div>
  );
};

export default VerifyAccount;
