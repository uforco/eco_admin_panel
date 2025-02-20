'use client'
import ThemeSwtBtn from "@/components/themeMode/ThemeSwtBtn";
import React from "react";
import { MdMenu, MdMenuOpen } from "react-icons/md";

interface Props {
  className: string;
  showSideBer: boolean;
  onoffsideber: () => void
}

function TopMemuBer(props: Props) {
  const { className: classname, showSideBer, onoffsideber } = props;

  return (
    <div
      className={` flex items-center w-full h-full overflow-hidden bg-transparent z-30 px-2 ${classname}`}
    >
      <div className=" text-blue-500 w-[300px] h-full flex justify-center items-center tracking-widest font-extrabold text-2xl ">
        ECO.DEV
      </div>
      <div className=" flex items-center w-full justify-between  ">
        <div>
          <button onClick={onoffsideber} className=" btnbg text-2xl flex justify-center items-center w-10 h-10 rounded-full  transition-all duration-500 overflow-hidden ">
            {!showSideBer ? <MdMenuOpen></MdMenuOpen> : <MdMenu></MdMenu>}
          </button>
        </div>
        <div>
          <ThemeSwtBtn></ThemeSwtBtn>
        </div>
      </div>
    </div>
  );
}

export default TopMemuBer;
