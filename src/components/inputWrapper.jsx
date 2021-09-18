import React from "react";
import InputType from "./InputType";

//add margin of 10 to the get started page.

const InputWrapper = ({ type, label, id, placeholder }) => {
  return (
    <div className="w-full rounded-xl ring-1 ring-black ring-opacity-30 h-12 relative mt-8">
      <span
        htmlFor={id}
        className="absolute left-3.5 -top-2.5 text-xs bg-gray-200 rounded-lg px-1.5 py z-10"
      >
        {label}
      </span>
      <InputType type={type} des={label} id={id} placeholder={placeholder} />
    </div>
  );
};

export default InputWrapper;
