import React from "react";
import "../../TopSectionDetiles.scss";
import { IoMdTrendingDown } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";

const TotalOrders = () => {
  return (
    <div className=" totalOrdersscss relative w-full h-full " >
      <p className=' Trendinglogo ' ><IoMdTrendingDown></IoMdTrendingDown></p>
      <div style={{ padding: "20px" }} className="  ">
        <div className=" flex justify-between ">
          <div>
            <p>Total Users</p>
            <p>277</p>
          </div>
          <div className=" cardRightIcon RightIcon    ">
            <MdShoppingCart  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalOrders;
