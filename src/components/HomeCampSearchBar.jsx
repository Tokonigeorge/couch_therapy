import React from "react";

//add searchIcon later in place of search
const HomeCampSearchBar = () => {
  return (
    <div className="px-6 py-6">
      <div className="flex flex-row justify-between items-center">
        <p className="font-semibold">Campfires</p>
        <p>Search</p>
      </div>
      <p className="text-gray-400 text-sm">
        Talk to people facing similar challenges
      </p>
    </div>
  );
};

export default HomeCampSearchBar;
