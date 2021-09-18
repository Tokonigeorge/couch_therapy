import React from "react";
import campfire from "../assests/campfireIcon.svg";
import couchIcon from "../assests/couchIcon.svg";
import homeIcon from "../assests/homeIcon.svg";
import journalIcon from "../assests/journalIcon.svg";

//a component to dynamically render all the icons without maually importing all the icons (useful if there are a lot of icons)
//couldnt do this as there is a bug in the react app giving errors
const NavIcon = ({ camp, couch, home, journal }) => {
  const Icons = () => {
    return (
      <>
        {camp && (
          <div className="flex flex-col">
            <span className="h-1 w-1 bg-black rounded-full place-self-center opacity-0"></span>
            <img src={campfire} alt="" />
          </div>
        )}
        {couch && (
          <div className="flex flex-col">
            <span className="h-1 w-1 bg-black rounded-full  place-self-center opacity-0"></span>
            <img src={couchIcon} alt="" />
          </div>
        )}
        {home && (
          <div className="flex flex-col">
            <span className="h-1 w-1 bg-black rounded-full  place-self-center"></span>
            <img src={homeIcon} alt="" />
          </div>
        )}
        {journal && (
          <div className="flex flex-col">
            <span className="h-1 w-1 bg-black rounded-full  place-self-center opacity-0"></span>
            <img src={journalIcon} alt="" />
          </div>
        )}
      </>
    );
  };
  return <Icons className="flex-grow-0 flex-shrink-0" />;
};

export default NavIcon;
