import React from "react";
import couchIcon from "../assests/couchIcon.svg";

const TherapySession = () => {
  return (
    <div className="bg-gray-200 rounded-md w-5/6 mt-6 mx-auto pl-3 pt-3 relative">
      <div className="w-1/2 mr-2">
        <p className="text-left font-semibold">
          You ready to have your first therapy session?
        </p>
        <span className="flex flex-row items-center">
          <img src={couchIcon} alt="" className="h-8 w-8 -ml-2" />
          <p className="text-sm font-semibold py-4">Sit on a couch</p>
        </span>
      </div>
      <div className="absolute -top-2 -right-5 w-40">
        <img
          src="https://snipboard.io/twujih.jpg"
          alt=""
          className="object-scale-down"
        />
      </div>
    </div>
  );
};

export default TherapySession;
