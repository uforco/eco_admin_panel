'use client'
import ThemeSwtBtn from "@/components/themeMode/ThemeSwtBtn";
import React from "react";
import { MdMenu, MdMenuOpen } from "react-icons/md";

interface Props {
  className: string;
  showSideBer: boolean;
  drawerOpen: boolean;
  onoffsideber: () => void;
  drawer:() => void
}

function TopMemuBer(props: Props) {
  const { className: classname, showSideBer, onoffsideber, drawer, drawerOpen } = props;

  return (
    <div
      className={` flex items-center w-full h-full overflow-hidden bg-transparent z-30 px-2 ${classname}`}
    >
      <div className=" text-blue-500 w-[300px] h-full flex justify-center items-center tracking-widest font-extrabold text-2xl ">
        ECO.DEV
      </div>
      <div className=" flex items-center w-full justify-between  ">
        <div>
          <button onClick={onoffsideber} className=" hidden 2xl:flex btnbg text-2xl  justify-center items-center w-10 h-10 rounded-full  transition-all duration-500 overflow-hidden ">
            {!showSideBer ? <MdMenuOpen></MdMenuOpen> : <MdMenu></MdMenu>}
          </button>
          <button onClick={drawer} className=" flex 2xl:hidden btnbg text-2xl  justify-center items-center w-10 h-10 rounded-full  transition-all duration-500 overflow-hidden ">
            {!drawerOpen ? <MdMenuOpen></MdMenuOpen> : <MdMenu></MdMenu>}
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
