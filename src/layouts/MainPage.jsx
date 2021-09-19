import React from "react";
import Nav from "../components/Nav";
import CampPage from "./CampPage";

const MainPage = () => {
  return (
    <div className="h-screen">
      <CampPage />
      <Nav />
    </div>
  );
};

export default MainPage;
