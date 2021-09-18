import React from "react";
import profileIcon from "../assests/profileIcon.svg";

const NavTop = ({ userName, dailyMessage }) => {
  return (
    <div className="flex flex-row justify-between items-center px-6">
      <div>
        <p className="text-xl font-semibold">
          Hi there <span className="font-bold">{userName}!</span>
        </p>
        <p className="text-gray-400">{dailyMessage}</p>
      </div>
      <div>
        <img src={profileIcon} alt="" /> <p className="font-bold">Profile</p>
      </div>
    </div>
  );
};

export default NavTop;
