import React from "react";
import Button from "../components/Button";
import Login from "../components/Login";
import HeaderText from "../components/HeaderText";

const SignupPage = () => {
  const headerText = ["No more tears", "Less stress", "Everyday"];
  return (
    <div className="pt-4">
      {headerText.map((i) => (
        <HeaderText text={i} />
      ))}
      <Button prop="bg-gray-400 bg-opacity-50" text="Sign up with email" />
      <Login />
    </div>
  );
};

export default SignupPage;
