"use client";
import "./totalProduct.scss";
import { Area, AreaChart, CartesianGrid } from "recharts";
import { HiGiftTop } from "react-icons/hi2";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#4180FF",
    },
  } satisfies ChartConfig;


const chartData = [
  { month: "January", desktop: 26, mobile: 80 },
  { month: "February", desktop: 30, mobile: 200 },
  { month: "March", desktop: 23, mobile: 120 },
  { month: "April", desktop: 18, mobile: 190 },
  { month: "May", desktop: 24, mobile: 130 },
  { month: "June", desktop: 39, mobile: 140 },
];



interface Props {
    data?: {name: string}[];
}

const TotalProduct = (props: Props) => {

    const {} = props;


    

    //   const colorCode2 =  colorCode || "#ff3916"

  return (
    <div className="  totalCardLineChartsSection  ">
      <div className="  topInfo w-full " >
        <div className=" leftside " >
            <p className=" icon productIcon " ><HiGiftTop></HiGiftTop></p>
            <div>
                <p className=" totalTitle " >Total Product</p>
                <p className=" totalData " >5,00,874</p>
            </div>
        </div>
        <div className=" rightside " >+1400 New Added</div>
      </div>


      <div className=" w-full  ">
        <ChartContainer config={chartConfig} className=" ChartContainer ">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} horizontal={false} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
           { <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={`#4180FF`} stopOpacity={0.8} />
                <stop offset="75%" stopColor={`#4180FF`} stopOpacity={0.3} />
              </linearGradient>
            </defs>}

            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke='#4180FF'
              stackId="a"
              strokeWidth={2.5}
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default TotalProduct;
