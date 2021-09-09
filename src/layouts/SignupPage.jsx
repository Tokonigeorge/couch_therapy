import React from "react";
import Button from "../components/Button";
import Login from "../components/Login";

const SignupPage = () => {
  return (
    <div className="pt-4">
      <Button prop="bg-gray-400 bg-opacity-50" text="Sign up with email" />
      <Login />
    </div>
  );
};

export default SignupPage;
