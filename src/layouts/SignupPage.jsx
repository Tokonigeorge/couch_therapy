import React from "react";
import Button from "../components/Button";
import Login from "../components/Login";
import HeaderText from "../components/HeaderText";

const SignupPage = () => {
  const headerText = ["No more tears.", "Less stress.", "Everyday."];
  const GoogleSignup = (
    <div>
      <span className="text-xl">G&nbsp;&nbsp;</span>Sign up with google
    </div>
  );
  return (
    <div className="h-screen flex flex-col items-center px-10 pt-4">
      <img
        src="https://snipboard.io/pLWveO.jpg"
        alt="Girl under the rain"
        className="h-2/5 object-scale-down"
      />
      {headerText.map((i) => (
        <HeaderText text={i} />
      ))}
      <Button prop="bg-gray-400 bg-opacity-50 mt-5" text={GoogleSignup} />
      <Button prop="bg-gray-400 bg-opacity-50 mt-5" text="Sign up with email" />
      <p className="text-xs text-black text-opacity-40 mt-4 mb-4 text-center">
        By clicking this button you agree to our
        <a href="/" className="underline">
          {" "}
          terms of service
        </a>{" "}
        and{" "}
        <a href="/" className="underline">
          privacy policy
        </a>
      </p>
      <Login />
    </div>
  );
};

export default SignupPage;
