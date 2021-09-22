import React, { useState } from "react";
import backArrow from "../assests/backArrow.svg";
import elipseIcon from "../assests/elipsisIcon.svg";
//added unique key to the textarea component so that on render the form wwouldnt rerender and have the text field lose focus each time.
//didnt work, what works was to put the form directly in the component.
const AddpostPage = () => {
  const [value, setValue] = useState("Start writing..");
  const [inputValue, setInputValue] = useState("Add a title");

  const date = "January 4, 2021 | 10:30 PM"; //will get this from a function later

  return (
    <div className="pt-4 px-6">
      <div className="flex justify-between items-center">
        <img src={backArrow} alt="back arrow button" />
        <p className="font-semibold">New Post</p>
        <img src={elipseIcon} alt="" />
      </div>
      <p className="text-center text-sm text-gray-300 mt-4 text-center">
        Entry for {date}{" "}
      </p>
      <form>
        <div className="h-12">
          <label htmlFor="title">
            <input
              id="title"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="text-2xl text-gray-300 mt-4 pb-2 outline-none w-full resize-none h-full"
              maxLength="18"
            />
          </label>
        </div>
        <div>
          <label htmlFor="write">
            <textarea
              id="write"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="text-gray-300 mt-4 pb-2 outline-none w-full resize-none overflow-hidden"
              cols="18"
              wrap="hard"
              rows="15"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default AddpostPage;
