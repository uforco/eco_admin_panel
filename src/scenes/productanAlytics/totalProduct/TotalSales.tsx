"use client";
import "./totalProduct.scss";
import { Area, AreaChart, CartesianGrid } from "recharts";
import { MdShoppingCart } from "react-icons/md";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#FFC52E",
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

const TotalSales = (props: Props) => {

    const {} = props;
    //   const colorCode2 =  colorCode || "#ff3916"

  return (
    <div className="  totalCardLineChartsSection  ">
      <div className="  topInfo " >
        <div className=" leftside " >
            <p className=" icon selesIcon " ><MdShoppingCart></MdShoppingCart></p>
            <div>
                <p className=" totalTitle " >Total Sales</p>
                <p className=" totalData " >5,00,874</p>
            </div>
        </div>
        <div className=" rightside " >+1400 New Added</div>
      </div>


      <div className=" ChartContainerWiper ">
        <ChartContainer config={chartConfig} className=" ChartContainer  ">
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
              <linearGradient id="TotalSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={`#FFC52E`} stopOpacity={0.8} />
                <stop offset="75%" stopColor={`#FFC52E`} stopOpacity={0.3} />
              </linearGradient>
            </defs>}

            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#TotalSales)"
              fillOpacity={0.4}
              stroke='#FFC52E'
              stackId="a"
              strokeWidth={2.5}
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default TotalSales;
