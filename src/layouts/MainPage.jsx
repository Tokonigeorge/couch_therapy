import React from "react";
import Nav from "../components/Nav";
import NavTop from "../components/NavTop";
import EmoticonBar from "../components/EmoticonBar";

const MainPage = () => {
  return (
    <div className=" h-screen pt-4">
      <NavTop userName="David" dailyMessage="How are you feeling today?" />
      <EmoticonBar />
      <Nav />
    </div>
  );
};

export default MainPage;
