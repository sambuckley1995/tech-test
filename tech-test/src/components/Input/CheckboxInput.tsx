import React from "react";
import { InputType } from "../../types";

import "./Input.scss";

interface IInputProps {
  inputValue: boolean;
  setInputValue: (inputValue: boolean) => void;
  label: string;
}

const CheckboxInput: React.FC<IInputProps> = ({
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
        onClick={() => {
          setInputValue(!inputValue);
        }}
      />
    </section>
  );
};

export default CheckboxInput;
