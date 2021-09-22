import React from "react";
import Nav from "../components/Nav";
import AddpostPage from "./AddpostPage";
import AddpostNavbar from "../components/AddpostNavbar";

const MainPage = ({isAddPost}) => {
  return (
    <div className="h-screen">
     <AddpostPage />
     {isAddPost ? <AddpostNavbar />:<Nav />} 
    </div>
  );
};

export default MainPage;
