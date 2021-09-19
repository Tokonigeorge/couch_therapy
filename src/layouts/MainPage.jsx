import React from "react";
import Nav from "../components/Nav";
import JournalPage from "./JournalPage";

const MainPage = () => {
  return (
    <div className="h-screen">
      <JournalPage />
      <Nav />
    </div>
  );
};

export default MainPage;
