import React from "react";
import NavTop from "../components/NavTop";
import EmoticonBar from "../components/EmoticonBar";
import TherapySession from "../components/TherapySession";
import HomeCampSearchBar from "../components/HomeCampSearchBar";
import HomeCampModal from "../components/HomeCampModal";

const HomePage = () => {
  const campImageUrls = [
    { url: "https://snipboard.io/9yGqfi.jpg", message: "Work Pressure" },
    { url: "https://snipboard.io/UxGz4b.jpg", message: "Anxiety" },
    { url: "https://snipboard.io/9yGqfi.jpg", message: "Work Pressure" },
    { url: "https://snipboard.io/UxGz4b.jpg", message: "Anxiety" },
  ];
  return (
    <div className="pt-4">
      <NavTop
        userName="David"
        dailyMessage="How are you feeling today?"
        header="Hi there"
      />
      <EmoticonBar />
      <TherapySession />
      <HomeCampSearchBar />
      <div className="grid grid-cols-4 w-max gap-x-4 px-6">
        {campImageUrls.map((i, indx) => (
          <HomeCampModal url={i.url} message={i.message} key={indx} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
