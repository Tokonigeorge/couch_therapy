import React from "react";

const HeaderText = ({ text }) => {
  return (
    <p className="text-4xl text-black whitespace-nowrap font-bold leading-tight self-start">
      {text}
    </p>
  );
};

export default HeaderText;
