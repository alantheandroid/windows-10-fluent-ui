import { React, useState, useEffect } from "react";
import { Icon } from "@fluentui/react";
import {
  ActionCenterIcon,
  SearchIcon,
  Volume2Icon,
  USBIcon,
  WifiEthernetIcon,
  ChevronUpIcon,
} from "@fluentui/react-icons-mdl2";

function SearchBox() {
  return (
    <div className="border-slate-500 border-2 h-full w-full px-4 gap-4 flex justify-start items-center bg-stone-700">
      <SearchIcon />
      <input
        className="w-full h-full bg-inherit border-0 outline-0"
        type="search"
        name="searchbar"
        id="searchbar"
        placeholder="Type here to search"
      />
    </div>
  );
}

function Taskbar() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
      console.log(date);
    }, 1000);
  }, []);

  return (
    <div className="bg-slate-900 absolute bottom-0 w-full h-10 flex justify-between items-center gap-4 text-white">
      <div className="flex justify-center items-center h-full min-w-[25%]">
        <Icon
          iconName="WindowsLogo"
          className="h-auto w-auto mx-4 cursor-default"
        />
        <SearchBox />
      </div>

      <div className="flex justify-center items-center mr-0.5 h-full gap-4">
        <div className="flex justify-center items-center h-full gap-2">
          <ChevronUpIcon className="text-xs" />
          <WifiEthernetIcon />
          <USBIcon />
          <Volume2Icon />
        </div>
        <div className="flex flex-col justify-center items-center h-full">
          <p className="text-xs">ITA</p>
          <p className="text-xs">IT</p>
        </div>
        <div className="flex flex-col justify-center items-center h-full w-max">
          <p className="text-xs">{date.toLocaleTimeString()}</p>
          <p className="text-xs">{date.toLocaleDateString()}</p>
        </div>
        <ActionCenterIcon className="h-auto" />
        <div className="h-full w-1 border-l-[1px] border-white"></div>
      </div>
    </div>
  );
}

export default Taskbar;
