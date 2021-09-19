import React from "react";

const HomeCampModal = ({ url, message }) => {
  return (
    <div className="bg-gray-200 grid place-items-center w-40 rounded-md flex-shrink-0 py-4">
      <img src={url} alt="" className="w-28" />
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default HomeCampModal;
