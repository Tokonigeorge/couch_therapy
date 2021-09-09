import React from "react";

const Button = ({ color, text }) => {
  return (
    <button
      className={`${color} text-white text-base font-medium w-5/6 py-2 rounded`}
    >
      {text}
    </button>
  );
};

export default Button;
