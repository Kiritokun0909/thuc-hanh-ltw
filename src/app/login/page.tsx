"use client";

import React, { useState } from "react";
import homeStyles from "../page.module.css";
import loginStyles from "./login.module.css";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [confirmPwd, setConfirmPwd] = useState<string>("");

  const [isLogin, setIsLogin] = useState<boolean>(true);

  const handleLoginClick = (e: any) => {
    e.preventDefault();

    console.log("Email: ", email);
    console.log("Password: ", pwd);
  };

  const handleRegisterClick = (e: any) => {
    e.preventDefault();

    console.log("Email: ", email);
    console.log("Password: ", pwd);
    console.log("Confirm password: ", confirmPwd);

    if (pwd !== confirmPwd) {
      alert("Password and confirm password are not matched!");
    }
  };

  return (
    <div className={loginStyles.container}>
      <form
        className={loginStyles.loginForm}
        onSubmit={isLogin ? handleLoginClick : handleRegisterClick}
      >
        <div className={loginStyles.formHeader}>
          <h2>{isLogin ? "Login" : "Register"}</h2>
        </div>
        <input
          type="text"
          className={loginStyles.inputRow}
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          className={loginStyles.inputRow}
          value={pwd}
          onChange={(e) => setPwd(e.currentTarget.value)}
          placeholder="Enter your password"
          required
        />
        {!isLogin && (
          <input
            type="password"
            className={loginStyles.inputRow}
            value={confirmPwd}
            onChange={(e) => setConfirmPwd(e.currentTarget.value)}
            placeholder="Enter confirm password"
            required
          />
        )}

        <div className={loginStyles.submitRow}>
          <button className={loginStyles.submitBtn} type="submit">
            {isLogin ? "Login" : "Register"}
          </button>
        </div>

        <div className={loginStyles.otherFunctions}>
          <button
            className={loginStyles.otherBtn}
            type="button"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Create new account" : "Already have account?"}
          </button>
        </div>
      </form>
    </div>
  );
}
