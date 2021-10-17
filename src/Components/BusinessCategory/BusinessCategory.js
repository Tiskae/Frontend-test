import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import InputField from "../../UI/InputField/InputField";
import SelectField from "../../UI/SelectField/SelectField";
import * as classes from "./BusinessCategory.module.css";

const BusinessCategory = (props) => {
  const [state, setState] = useState({
    formData: {
      business: [
        {
          label: "Type of business",
          type: "text",
          changed: null,
          required: false,
        },
        {
          label: "Business Category",
          type: "text",
          changed: null,
        },
      ],
      POS: {
        title: "Do you use POS machines for your business?",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
    },
  });

  return (
    <div className={classes.BusinessCategory}>
      <h3>Business Category</h3>

      <form>
        <div className={classes.TwoColumn}>
          {state.formData.business.map((el, i) => (
            <div key={i}>
              <InputField
                label={el.label}
                type={el.type}
                changed={props.changed}
              />
            </div>
          ))}
        </div>

        <SelectField
          title={state.formData.POS.title}
          options={state.formData.POS.options}
          changed={null}
        />
      </form>

      <div className={classes.BtnField}>
        <Button btnType="blue" clicked={props.submit}>
          Complete
        </Button>
      </div>
    </div>
  );
};

export default BusinessCategory;
