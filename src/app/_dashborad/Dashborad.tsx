"use client";
import React from "react";
import SideManu from "@/components/adminPanelNavBer/sideber/SideManu";
import TopMemuBer from "../../components/adminPanelNavBer/topber/TopMemuBer";

const Dashborad = ({children}:{children: React.ReactNode}) => {

    const [showSideBer, setShowSideBer ] = React.useState<boolean>(false)

    const onoffsideber = (): void => {
        setShowSideBer((priv) => !priv)
    }


  return (
    <div className=" relative bg-white dark:bg-[#182a50] ">
      {/* Top Menu Ber section */}
      <div className=" w-full h-16 pr-[18px] absolute top-0 left-0 z-50 ">
        <TopMemuBer onoffsideber={onoffsideber} showSideBer={showSideBer} className=" w-full h-full bg-slate-100/50 dark:bg-[#182a50]/50  backdrop-blur-sm " ></TopMemuBer>
      </div>

      <div className=" flex overflow-hidden pl-2 w-full ">
        {/* SideBer section */}
        <div className={` ${showSideBer? "w-0" : "w-[300px] md:w-[365px] lg:w-[325px] xl:w-[300px] 2xl:w-[284px] "} h-screen overflow-hidden transition-all duration-500 `}>
            <div style={{height: 'calc(100% - 64px)'}} className={` ${showSideBer? "-ml-[245px]" : "ml-0"} w-[245px] transition-all duration-500 mt-16 overflow-hidden`} >
                <SideManu className="containeScrollber pl-1 " ></SideManu>
            </div>
        </div>
        {/* main container section */}
        <div className=" w-full h-screen overflow-y-scroll overflow-hidden p-2 pl-0 pt-0 ">
          {/* <div className=" w-full "> */}
            <div className=" w-full min-h-[calc(100%-68px)] mt-16 bg-gray-300/50 dark:bg-[#071739] rounded-lg p-6 ">
            {children}
            </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashborad;
