
import React from "react";
import "../../TopSectionDetiles.scss";

import { IoMdTrendingUp } from "react-icons/io";
// import { IoMdTrendingDown } from "react-icons/io";
import { EllipsisVertical } from "lucide-react";

interface Props {
  title: string;
  total: number | string;
  monthProfit: number | string;
  className: string
  TitleIcon?: React.ElementType | undefined;
}

const PrifixCard: React.FC<Props> = (props) => {

  const { title, total, monthProfit, TitleIcon, className: classname  } = props

  if(!TitleIcon) return null

  return (
    <div className={` ${classname} relative w-full h-full  `}>
        <p className=' Trendinglogo ' ><IoMdTrendingUp></IoMdTrendingUp></p>
      <div className=" cardmincontaine  h-full " >
        <div className=" flex justify-between  ">
          <div className=" totalTextstyle  " >
            <p>{title}</p>
            <span>{total}</span>
          </div>
          <div className=" cardRightIcon RightIcon ">
            <TitleIcon ></TitleIcon>
          </div>
        </div>
        <div className=" monthsection  " >
          <div  > <p>+ {monthProfit}%</p> <span >last month</span> </div>
          <button  ><EllipsisVertical /></button>
        </div>
      </div>
    </div>
  );
};

export default PrifixCard;
