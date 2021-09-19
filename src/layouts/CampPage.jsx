import React from "react";
import NavTop from "../components/NavTop";
import abuseIcon from "../assests/abuseButtonIcon.svg";
import HomeCampSearchBar from "../components/HomeCampSearchBar";
import HomeCampModal from "../components/HomeCampModal";

const CampPage = () => {
  let slotNumber = 5;
  const DomesticAbuseButton = () => {
    return (
      <div className="flex items-center">
        <img src={abuseIcon} alt="" />
        <p className="text-xs font-bold ml-2">DOMESTIC ABUSE</p>
      </div>
    );
  };
  const campImageUrls = [
    { url: "https://snipboard.io/9yGqfi.jpg", message: "Work Pressure" },
    { url: "https://snipboard.io/UxGz4b.jpg", message: "Anxiety" },
    { url: "https://snipboard.io/9yGqfi.jpg", message: "Work Pressure" },
    { url: "https://snipboard.io/UxGz4b.jpg", message: "Anxiety" },
  ];
  return (
    <div className="pt-4">
      <NavTop dailyMessage="How are you feeling today?" header="Campfires" />
      <img
        src="https://snipboard.io/570dgR.jpg"
        alt=""
        className="w-5/6 m-auto mt-6"
      />
      <p className="pt-4 font-bold px-6">
        You ready to have your first therapy session?
      </p>
      <div className="pt-3 px-6 flex justify-between items-center">
        <p className="text-gray-400 text-sm">{slotNumber} slots left</p>
        <DomesticAbuseButton />
      </div>
      <HomeCampSearchBar />
      <div className="grid grid-cols-2 grid-rows-2 gap-4 mx-6">
        {campImageUrls.map((i, indx) => (
          <HomeCampModal url={i.url} message={i.message} key={indx} />
        ))}
      </div>
    </div>
  );
};

export default CampPage;
