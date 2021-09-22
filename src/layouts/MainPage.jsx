import React from "react";
import Nav from "../components/Nav";
import CouchPage from "./CouchPage";
import AddpostNavbar from "../components/AddpostNavbar";

const MainPage = ({ isAddPost }) => {
  return (
    <div className="h-screen">
      <CouchPage />
      {isAddPost ? <AddpostNavbar /> : <Nav />}
    </div>
  );
};

export default MainPage;
