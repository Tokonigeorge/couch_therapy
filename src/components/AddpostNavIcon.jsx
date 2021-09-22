import React from "react";
import cameraIcon from "../assests/cameraIcon.svg";
import penIcon from "../assests/penIcon.svg";
import voiceIcon from "../assests/voiceIcon.svg";
import linkIcon from "../assests/linkIcon.svg";

const AddpostNavIcon = ({ camera, voice, pen, link }) => {
  const Icons = () => {
    return (
      <>
        {camera && (
          <div className="flex flex-col">
            <span className="h-1 w-1 bg-black rounded-full place-self-center mb-4 opacity-0"></span>
            <img src={cameraIcon} alt="" />
          </div>
        )}
        {pen && (
          <div className="flex flex-col">
            <span className="h-1 w-1 bg-black rounded-full  place-self-center mb-4 opacity-0"></span>
            <img src={penIcon} alt="" />
          </div>
        )}
        {voice && (
          <div className="flex flex-col">
            <span className="h-1 w-1 bg-black rounded-full  place-self-center mb-4 opacity-0"></span>
            <img src={voiceIcon} alt="" />
          </div>
        )}
        {link && (
          <div className="flex flex-col">
            <span className="h-1 w-1 bg-black rounded-full  place-self-center mb-4 opacity-0"></span>
            <img src={linkIcon} alt="" />
          </div>
        )}
      </>
    );
  };
  return <Icons className="flex-grow-0 flex-shrink-0" />;
};

export default AddpostNavIcon;
