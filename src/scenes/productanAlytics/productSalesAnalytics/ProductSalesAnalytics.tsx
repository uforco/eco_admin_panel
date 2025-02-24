"use client";

import "./productSalesAnalytics.scss";
import { IoMdTrendingUp } from "react-icons/io";
import { PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Ellipsis } from "lucide-react";

const chartData = [
  { month: "january", TotalSales: 1260, TotalOrder: 570, OrderCancel: 190 },
];

const chartConfig = {
  TotalSales: {
    label: "TotalSales",
    color: "hsl(var(--chart-1))",
  },
  TotalOrder: {
    label: "TotalOrder",
    color: "hsl(var(--chart-2))",
  },
  OrderCancel: {
    label: "OrderCancel",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const ProductSalesAnalytics = () => {
  return (
    <div className=" productSalesAnalytics boxBgColor  h-full">

      <div>
        <div className=" flex  justify-between items-center topOptionbtn ">
          <span className="titelSection">Product Sales Analytics</span>
          <button className=" rounded-full w-10 h-10 bg-transparent cursor-pointer ">
            <Ellipsis />
          </button>
        </div>
      </div>

      <div className=" relative redioChartCard ">
        <div className=" middIncon  ">
          <IoMdTrendingUp></IoMdTrendingUp>
        </div>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] "
        >
          <RadialBarChart
            data={chartData}
            startAngle={-110}
            endAngle={360 - 110}
            innerRadius={70}
            outerRadius={110}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis
              tick={false}
              tickLine={false}
              axisLine={false}
            ></PolarRadiusAxis>
            <RadialBar
              dataKey="TotalSales"
              stackId="a"
              cornerRadius={20}
              fill="#5B93FF"
              className="stroke-transparent stroke-2"
              startAngle={90}
              endAngle={0}
            />
            <RadialBar
              dataKey="TotalOrder"
              fill="#FFD66B"
              stackId="a"
              cornerRadius={20}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="OrderCancel"
              fill="#FF8F6B"
              stackId="a"
              cornerRadius={20}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default ProductSalesAnalytics;
