import React from "react";
// import SearchIcon from "../assets/svg/SearchIcon";
import WindowsIcon from "../assets/svg/WindowsIcon";
import { Icon } from "@fluentui/react";
import { ActionCenterIcon, SearchIcon } from "@fluentui/react-icons-mdl2";

function SearchBox() {
  return (
    <div className="border-slate-500 border-2 h-full w-full px-4 gap-4 flex justify-start items-center bg-stone-700">
      <SearchIcon />
      <input
        className="w-full flex justify-start items-center h-full bg-inherit border-0 outline-0"
        type="search"
        name="searchbar"
        id="searchbar"
        placeholder="Type here to search"
      />
    </div>
  );
}

function Taskbar() {
  return (
    <div className="bg-slate-900 absolute bottom-0 w-full h-10 flex justify-between items-center text-white">
      <div className="flex justify-center items-center h-full min-w-[25%]">
        <Icon
          iconName="WindowsLogo"
          className="h-auto w-auto mx-4 cursor-default"
        />
        <SearchBox />
      </div>

      <div className="flex justify-center items-center mr-0.5 h-full">
        <ActionCenterIcon className="h-auto mx-4" />
        <div className="h-full w-1 border-l-[1px] border-white"></div>
      </div>
    </div>
  );
}

export default Taskbar;
