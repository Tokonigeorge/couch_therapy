import React from "react";
import profileIcon from "../assests/profileIcon.svg";

const NavTop = ({ userName, dailyMessage, header }) => {
  return (
    <div className="flex flex-row justify-between items-center px-6">
      <div>
        <p className="text-xl font-semibold">
          {header}{" "}
          <span className="font-bold">{userName && userName + "!"} </span>
        </p>
        <p className="text-gray-400 ">{dailyMessage}</p>
      </div>
      <div>
        <img src={profileIcon} alt="" /> <p className="font-bold">Profile</p>
      </div>
    </div>
  );
};

export default NavTop;
