import React from "react";

const HomeCampModal = ({ url, message }) => {
  //for mainpage, check if w-32 works otherwise pass width as prop with w-40 for mainpage
  return (
    <div className="bg-gray-200 grid place-items-center w-32 rounded-md flex-shrink-0 py-4 ">
      <img src={url} alt="" className="w-28" />
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default HomeCampModal;
