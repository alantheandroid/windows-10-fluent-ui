import React from "react";
import SearchIcon from "../assets/svg/SearchIcon";
import WindowsIcon from "../assets/svg/WindowsIcon";

function SearchBox() {
  return (
    <div className="border-slate-500 border-[1.5px] h-full w-full px-4 gap-3 flex justify-start items-center text-white bg-stone-700">
      <SearchIcon />
      <input
        className="w-full flex justify-start items-center overflow-hidden h-full bg-inherit border-0 outline-0"
        type="search"
        name="searchbar"
        id="searchbar"
        placeholder="Type here to search"
      ></input>
    </div>
  );
}

function Taskbar() {
  return (
    <div className="bg-slate-900 absolute bottom-0 w-full h-10 flex justify-between items-center">
      <div className="flex justify-center items-center h-full min-w-[25%]">
        <div className="px-4 h-full">
          <WindowsIcon />
        </div>
        <SearchBox />
      </div>

      <div className="h-full w-1 border-l-[1px] mr-0.5"></div>
    </div>
  );
}

export default Taskbar;
