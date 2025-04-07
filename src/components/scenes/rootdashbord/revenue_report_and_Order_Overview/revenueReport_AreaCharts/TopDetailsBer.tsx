
import React from "react";

interface Props {
    TitleIcon: React.ElementType | undefined;
    iconColor?: string;
    title: string;
    data: number;
}

const TopDetailsBer: React.FC<Props> = (props) => {
  const {TitleIcon, title, data, iconColor} = props

  if(!TitleIcon) return null

  const formatNumber = (num: number): string => {
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1).replace(".0", "") + " B"; // Billion
    if (num >= 10_000_000) return (num / 10_000_000).toFixed(1).replace(".0", "") + " M"; // 10L = 1M
    // if (num >= 100_000) return (num / 100_000).toFixed(1).replace(".0", "") + " L"; // 100k = 1L
    if (num >= 1_000) return (num / 1_000).toFixed(1).replace(".0", "") + " k"; // 1000 = 1k
    return num.toString(); // Less than 1000, show as is
  }

  return (
    <div className=" flex justify-start lg:justify-center items-center gap-2  ">
      <div style={{color: iconColor}} className={`text-[${iconColor}]`} >
        <TitleIcon className={` iconStyle`  } ></TitleIcon>
      </div>
      <div>
        <p className=" title " >{title}</p>
        <p className=" titleData " >{formatNumber(data)}</p>
      </div>
    </div>
  );
}

export default TopDetailsBer;
