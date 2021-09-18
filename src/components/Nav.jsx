import React from "react";
import NavIcon from "./NavIcon";

const Nav = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 flex flex-row justify-between items-center px-2">
      <NavIcon home={"home"} />
      <NavIcon camp={"camp"} />
      <NavIcon couch={"couch"} />
      <NavIcon journal={"journal"} />
    </div>
  );
};

export default Nav;
