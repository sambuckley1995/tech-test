import React from "react";
import { InputType } from "../../types";

import "./Input.scss";

interface ICheckboxInputProps {
  inputValue: boolean;
  setInputValue: (inputValue: boolean) => void;
  label: string;
}

const CheckboxInput: React.FC<ICheckboxInputProps> = ({
  inputValue,
  setInputValue,
  label,
}) => {
  return (
    <section className="input checkbox">
      <label>{label}</label>
      <input
        type={InputType.CHECKBOX}
        checked={inputValue}
        onChange={() => {
          setInputValue(!inputValue);
        }}
      />
    </section>
  );
};

export default CheckboxInput;
