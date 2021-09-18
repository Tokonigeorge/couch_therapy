import React from "react";
import Nav from "../components/Nav";
import NavTop from "../components/NavTop";

const MainPage = () => {
  return (
    <div className=" h-screen pt-4">
      <NavTop userName="David" dailyMessage="How are you feeling today?" />
      <Nav />
    </div>
  );
};

export default MainPage;
