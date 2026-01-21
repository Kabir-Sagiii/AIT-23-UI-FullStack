import React from "react";
import "./Signin.css";

const SignIn = ({ login }) => {
  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2 className="signin-title">Sign In</h2>

        <form className="signin-form">
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <button onClick={login} type="button" className="signin-button">
            Sign In
          </button>
        </form>

        <p className="signin-footer">
          Don't have an account? <span>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
