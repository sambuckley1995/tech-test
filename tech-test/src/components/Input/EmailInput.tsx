import React from "react";
import { InputType } from "../../types";

import "./Input.scss";

interface IInputProps {
  inputValue: string;
  setInputValue: (inputValue: string) => void;
  label: string;
}

const EmailInput: React.FC<IInputProps> = ({
  inputValue,
  setInputValue,
  label,
}) => {
  return (
    <section className="input email">
      <label>{label}</label>
      <input
        type={InputType.EMAIL}
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(e.target.value);
        }}
      />
    </section>
  );
};

export default EmailInput;
