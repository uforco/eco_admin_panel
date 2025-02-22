import { Ellipsis, TrendingUp } from "lucide-react";
import React from "react";

// interface Props {}

function TopDetilsSection() {
  // const {} = props

  return (
    <div style={{ color: "#fff", padding: "10px 16px" }} className=" w-full  ">
      <div className=" flex  justify-between items-center ">
        <span className=" dark:text-white text-xl uppercase font-semibold tracking-wider ">
          Total Sales
        </span>
        <button className=" rounded-full w-10 h-10 bg-transparent cursor-pointer ">
          <Ellipsis />
        </button>
      </div>
      <div className=" flex  items-center ">
        <span className=" text-white text-2xl font-semibold ">
          $3,787,681.00
        </span>
        <div
          style={{ color: "#60ff50" }}
          className=" font-semibold flex items-center ml-4 text-sm  "
        >
          <span>40.63%</span>
          <TrendingUp className=" w-4 h-4 ml-1 " />
        </div>
      </div>
      <div style={{ color: "#d3d3d3" }} className=" flex items-center ">
        <p className=" mr-2 ">$3,578.90</p>
        <p>in last month</p>
      </div>
    </div>
  );
}

export default TopDetilsSection;
