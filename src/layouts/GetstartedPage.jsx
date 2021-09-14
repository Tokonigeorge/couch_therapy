import React from "react";
import InputWrapper from "../components/inputWrapper";

const GetstartedPage = () => {
  return (
    <div>
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
    </div>
  );
};

export default GetstartedPage;
