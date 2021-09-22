import React from "react";
import AddpostNavIcon from "./AddpostNavIcon";

const AddpostNavbar = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 flex flex-row justify-between items-center px-6">
      <AddpostNavIcon camera={"camera"} />
      <AddpostNavIcon pen={"pen"} />
      <AddpostNavIcon voice={"voice"} />
      <AddpostNavIcon link={"link"} />
    </div>
  );
};

export default AddpostNavbar;
