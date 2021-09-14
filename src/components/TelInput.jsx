import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const TelInput = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <PhoneInput
        country={"ng"}
        value={value}
        onChange={(phone) => setValue(phone)}
        placeholder="Phone Number"
        inputProps={{
          required: true,
        }}
        inputStyle={{
          width: "100%",
          fontSize: "0.75rem",
          color: "gray",
          height: "100%",
          border: "none",
        }}
        containerStyle={{
          outline: "none",
          border: "none",
          width: "100%",
          height: "100%",
          padding: "0 1rem",
        }}
        buttonStyle={{
          background: "transparent",
          border: "none",
        }}
        dropdownStyle={{
          width: "77vw",
          marginLeft: "-1rem",
        }}
      />
    </>
  );
};

export default TelInput;
