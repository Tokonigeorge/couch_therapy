import React from "react";
import Nav from "../components/Nav";
import NavTop from "../components/NavTop";
import EmoticonBar from "../components/EmoticonBar";
import TherapySession from "../components/TherapySession";

const MainPage = () => {
  return (
    <div className=" h-screen pt-4">
      <NavTop userName="David" dailyMessage="How are you feeling today?" />
      <EmoticonBar />
      <TherapySession />
      <Nav />
    </div>
  );
};

export default MainPage;
