import React from "react";
import elipseIcon from "../assests/elipsisIcon.svg";

//where cl is written replace with a clock icon

const JournalItem = ({ header, date, sharedWith }) => {
  return (
    <div className="px-6 mt-4">
      <div className="flex flex-row justify-between items-center">
        <p className="font-bold">{header}</p>
        <img src={elipseIcon} alt="" />
      </div>
      <div className="flex flex-row text-xs text-gray-400 mt-2">
        <p>cl</p>
        <p className="ml-2">{date}</p>
        {sharedWith && (
          <p className="ml-4 text-black">shared with {sharedWith}</p>
        )}
      </div>
    </div>
  );
};

export default JournalItem;
