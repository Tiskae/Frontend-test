import React, { useState } from "react";
import SelectField from "../../UI/SelectField/SelectField";
import InputField from "../../UI/InputField/InputField";
import * as classes from "./VerifyAccount.module.css";
import BVNReason from "./BVNReason/BVNReason";
import Button from "../../UI/Button/Button";
import Dropdown from "../../UI/Dropdown/Dropdown";
import * as helper from "../../Helper";

const VerifyAccount = (props) => {
  const [state, setState] = useState({
    verificationMethod: "",
    bvn: "",
    accountNumber: "",
    bank: "",
  });

  const verificationMethodChanged = (value) => {
    setState({ ...state, verificationMethod: value });
  };

  const BVNChangedHandler = (event) => {
    const val = event.target.value.trim();
    if (val.length === 12) return;
    setState({ ...state, bvn: val });
  };

  const accountNoChangedHandler = (event) => {
    const val = event.target.value.trim();
    if (!val) return;
    setState({ ...state, accountNumber: val });
  };

  const bankChangedHandler = (event) => {
    const val = event.target.value.trim();
    if (!val) return;
    setState({ ...state, bank: val });
  };

  const BVN = (
    <>
      <div className={classes.InputField}>
        <InputField
          label="Bank Verification Number (11-digits)"
          type="number"
          maxLength="11"
          changed={BVNChangedHandler}
          value={state.bvn}
        />
      </div>

      <BVNReason />
    </>
  );

  const PAN = (
    <div className={classes.TwoColumn}>
      <InputField
        label="Account Number"
        type="number"
        maxLength="10"
        changed={accountNoChangedHandler}
        value={state.accountNumber}
      />
      <Dropdown
        label="Select Bank"
        default=""
        options={helper.allBanksInNigeria}
        changed={bankChangedHandler}
        value={state.bank}
      />
    </div>
  );

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

      {state.verificationMethod === "bvn" && state.verificationMethod !== ""
        ? BVN
        : null}

      {state.verificationMethod === "pan" && state.verificationMethod !== ""
        ? PAN
        : null}

      <div className={classes.BtnField}>
        <Button
          btnType="blue"
          disabled={
            !(state.bvn.length === 11 || (state.accountNumber && state.bank))
          }
          clicked={props.next}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default VerifyAccount;
