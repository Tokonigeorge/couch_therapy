import React from "react";
import angryIcon from "../assests/angryEmojiIcon.svg";
import happyIcon from "../assests/happyEmojiIcon.svg";
import regularIcon from "../assests/regularEmojiIcon.svg";
import sadIcon from "../assests/sadEmojiIcon.svg";

const EmoticonBar = () => {
  return (
    <div className="flex flex-row justify-between items-centers px-6 mt-8">
      <div className="flex flex-col">
        <span className="bg-black h-14 w-14 rounded-md grid place-items-center">
          <img src={happyIcon} alt="" />
        </span>
        <p className="text-center text-sm pt-2 font-medium">Happy</p>
      </div>
      <div className="flex flex-col">
        <span className="bg-gray-400 opacity-20 h-14 w-14 rounded-md grid place-items-center">
          <img src={sadIcon} alt="" />
        </span>
        <p className="text-center text-sm pt-2 font-medium">Sad</p>
      </div>
      <div className="flex flex-col">
        <span className="bg-gray-400 opacity-20 h-14 w-14 rounded-md grid place-items-center">
          <img src={angryIcon} alt="" />
        </span>
        <p className="text-center text-sm pt-2 font-medium">Angry</p>
      </div>
      <div className="flex flex-col">
        <span className="bg-gray-400 opacity-20 h-14 w-14 rounded-md grid place-items-center">
          <img src={regularIcon} alt="" />
        </span>
        <p className="text-center text-sm pt-2 font-medium">Regular</p>
      </div>
    </div>
  );
};

export default EmoticonBar;
