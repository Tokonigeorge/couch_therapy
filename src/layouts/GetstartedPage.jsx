import React, { useState } from "react";
import Button from "../components/Button";
import InputWrapper from "../components/inputWrapper";
import logo from "../assests/logo.svg";
import Login from "../components/Login";

const GetstartedPage = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="h-screen flex flex-col items-center px-10 pt-4">
      <img src={logo} alt="Logo" />
      <p className="text-4xl font-bold text-center mt-4">Create your Account</p>
      <InputWrapper
        type="text"
        label="First Name"
        id="fname"
        placeholder="What should we refer to you as?"
      />
      <InputWrapper
        type="text"
        label="Last Name"
        id="Lastname"
        placeholder="What's your family name"
      />
      <InputWrapper label="Phone Number" />
      <label className="text-sm text-gray-400 inline-flex items-center mt-4">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="mr-1.5"
        />
        <span>
          {" "}
          By creating an account you agree to phastmoney's{" "}
          <a href="/" className="underline">
            Privacy
          </a>{" "}
          and{" "}
          <a href="/" className="underline">
            Terms of use.
          </a>
        </span>
      </label>
      <Button
        prop="bg-black mt-4 mb-4
      "
        text="Get Started"
      />
      <Login />
    </div>
  );
};

export default GetstartedPage;
