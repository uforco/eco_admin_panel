import React from "react";
import "../../TopSectionDetiles.scss";
import { IoStar } from "react-icons/io5";
import { IoMdTrendingUp } from "react-icons/io";

const TotalReviews = () => {
  return (
    <div className="totalreviewsscss w-full h-full relative ">
      <p className=' Trendinglogo ' ><IoMdTrendingUp></IoMdTrendingUp></p>
      <div style={{ padding: "20px" }} className="  ">
        <div className=" flex justify-between ">
          <div>
            <p>Total Reviews</p>
            <p>166</p>
          </div>
          <div className=" cardRightIcon RightIcon ">
            <IoStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalReviews;
