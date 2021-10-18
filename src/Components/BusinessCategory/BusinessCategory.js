import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import Dropdown from "../../UI/Dropdown/Dropdown";
import SelectField from "../../UI/SelectField/SelectField";
import * as classes from "./BusinessCategory.module.css";
import * as helper from "../../Helper";

const BusinessCategory = (props) => {
  const [state, setState] = useState({
    businessType: "",
    businessCategory: "",
    usePOSMachine: "",
  });

  const businessTypeChangedHandler = (event) => {
    const val = event.target.value;
    setState({ ...state, businessType: val });
  };

  const businessCategoryChangedHandler = (event) => {
    const val = event.target.value;
    setState({ ...state, businessCategory: val });
  };

  const usePOSMachineChangedHandler = (val) => {
    setState({ ...state, usePOSMachine: val });
  };

  const formData = {
    business: [
      {
        label: "Type of business",
        default: "",
        options: helper.allBusinessTypes,
        value: state.businessType,
        changed: businessTypeChangedHandler,
      },
      {
        label: "Business Category",
        default: "",
        options: helper.allBusinessCategories,
        value: state.businessCategory,
        changed: businessCategoryChangedHandler,
      },
    ],
    POS: {
      title: "Do you use POS machines for your business?",
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" },
      ],
      changed: usePOSMachineChangedHandler,
    },
  };

  return (
    <div className={classes.BusinessCategory}>
      <h2>Business Category</h2>

      <form>
        <div className={classes.TwoColumn}>
          {formData.business.map((el, i) => (
            <div key={i}>
              <Dropdown
                label={el.label}
                default={el.default}
                options={el.options}
                // value={el.value}
                changed={el.changed}
              />
            </div>
          ))}
        </div>

        <SelectField
          title={formData.POS.title}
          options={formData.POS.options}
          changed={formData.POS.changed}
        />
      </form>

      <div className={classes.BtnField}>
        <Button
          btnType="blue"
          clicked={props.submit}
          disabled={
            !(
              state.businessType &&
              state.businessCategory &&
              state.usePOSMachine
            )
          }
        >
          Complete
        </Button>
      </div>
    </div>
  );
};

export default BusinessCategory;
