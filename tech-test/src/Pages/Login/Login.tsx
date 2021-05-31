import React, { useState } from "react";
import CheckboxInput from "../../components/Input/CheckboxInput";
import EmailInput from "../../components/Input/EmailInput";
import { InputType } from "../../types";
import "./Login.scss";

const Login: React.FC = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [shouldRememberDevice, setShouldRememberDevice] = useState(false);
  console.log(emailAddress);

  return (
    <section className="login">
      <div className="login-inner">
        <img
          src="https://green.cdn.energy/branding/logo-r.svg"
          className="app-logo"
          alt="green-logo"
        />
        <div>
          <h1>Operations Studio</h1>
          <p>Please enter you email below</p>
        </div>

        <EmailInput
          inputValue={emailAddress}
          setInputValue={setEmailAddress}
          label="Email Address"
        />

        <CheckboxInput
          inputValue={shouldRememberDevice}
          setInputValue={setShouldRememberDevice}
          label="Remember this device"
        />

        <button>Sign In</button>
      </div>
    </section>
  );
};

export default Login;