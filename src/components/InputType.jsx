import React, { useState } from "react";
import TelInput from "./TelInput";

const InputType = ({ type, des, id, placeholder }) => {
  const [value, setValue] = useState("");
  return (
    <>
      {type === "text" ? (
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          name={des}
          id={id}
          placeholder={placeholder}
          className="w-full h-full px-4 text-sm text-gray-400 outline-none "
        />
      ) : (
        <TelInput />
      )}
    </>
  );
};

export default InputType;
