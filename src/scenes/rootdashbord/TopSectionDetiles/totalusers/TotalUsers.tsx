import React from "react";
import "../../TopSectionDetiles.scss";
import { FaUserCircle } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { EllipsisVertical } from "lucide-react";

const TotalUsers = () => {
  return (
    <div className="usercardscss relative w-full h-full ">
        <p className=' Trendinglogo ' ><IoMdTrendingUp></IoMdTrendingUp></p>
      <div style={{ padding: "20px", zIndex: 50 }} className=" cardmincontaine  " >
        <div className=" flex justify-between ">
          <div className=" totalTextstyle  " >
            <p>Total Users</p>
            <span>277</span>
          </div>
          <div className=" cardRightIcon RightIcon  ">
            <FaUserCircle />
          </div>
        </div>
        <div className=" monthsection " >
          <div  > <p>+ 25%</p> <span >last month</span> </div>
          <button className="rounded-full w-8 h-8 bg-transparent cursor-pointer" ><EllipsisVertical /></button>
        </div>
      </div>
    </div>
  );
};

export default TotalUsers;
