import React from "react";
import "../../TopSectionDetiles.scss";
import { GiShoppingBag } from "react-icons/gi";
import { IoMdTrendingDown } from "react-icons/io";

const Totalproducts = () => {
  return (
    <div className=" totalproductsscss relative w-full h-full " >
      <p className=' Trendinglogo ' ><IoMdTrendingDown></IoMdTrendingDown></p>
      <div style={{ padding: "20px" }} className="  ">
        <div className=" flex justify-between ">
          <div>
            <p>Total Users</p>
            <p>277</p>
          </div>
          <div className=" cardRightIcon RightIcon ">
            <GiShoppingBag />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Totalproducts;
