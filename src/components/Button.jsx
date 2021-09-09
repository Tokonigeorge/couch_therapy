import React from "react";

const Button = ({ prop, text }) => {
  return (
    <button
      className={`${prop} text-white text-base font-medium w-5/6 py-2 rounded`}
    >
      {text}
    </button>
  );
};

export default Button;
