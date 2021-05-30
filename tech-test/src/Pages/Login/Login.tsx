import React from "react";
import "./Login.scss";

const Login: React.FC = () => {
  return (
    <section className="login">
      <div className="login-inner">
        <img
          src="https://green.cdn.energy/branding/logo-r.svg"
          className="app-logo"
          alt="green-logo"
        />
        <h1>Operations Studio</h1>
        <p>Please enter you email below</p>
        <div className="email-input">
          <label>Email Address</label>
          <input type="email" />
        </div>
        <div>
          <input type="checkbox" />
          <label>Remember this device</label>
        </div>
        <button>Sign In</button>
      </div>
    </section>
  );
};

export default Login;
