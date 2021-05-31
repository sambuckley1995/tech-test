import React, { useState } from "react";
import CheckboxInput from "../../components/Input/CheckboxInput";
import EmailInput from "../../components/Input/EmailInput";
import "./Login.scss";

const Login: React.FC = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [shouldRememberDevice, setShouldRememberDevice] = useState(false);

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

        <button
          onClick={() =>
            console.table({
              "Email address:": emailAddress,
              "Should remember this device:": shouldRememberDevice,
            })
          }
        >
          Sign In
        </button>
      </div>
    </section>
  );
};

export default Login;
