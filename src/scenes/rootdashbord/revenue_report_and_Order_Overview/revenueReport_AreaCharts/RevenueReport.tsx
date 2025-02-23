"use client";
import React from "react";
import { IoBriefcase, IoBookmarks } from "react-icons/io5";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
} from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import TopDetailsBer from "./TopDetailsBer";
import { BsFillLayersFill } from "react-icons/bs";
import YearSelector from "./YearSelector";

interface DataItem {
  month: string;
  desktop: number;
  desktop2: number;
  desktop3: number;
}

const chartData: DataItem[] = [
  { month: "January", desktop: 186, desktop2: 166, desktop3: 136 },
  { month: "February", desktop: 205, desktop2: 185, desktop3: 55 },
  { month: "March", desktop: 237, desktop2: 207, desktop3: 177 },
  { month: "April", desktop: 73, desktop2: 53, desktop3: 23 },
  { month: "May", desktop: 209, desktop2: 179, desktop3: 149 },
  { month: "June", desktop: 214, desktop2: 174, desktop3: 144 },
  { month: "July", desktop: 189, desktop2: 159, desktop3: 129 },
  { month: "August", desktop: 276, desktop2: 246, desktop3: 216 },
  { month: "September", desktop: 230, desktop2: 200, desktop3: 170 },
  { month: "October", desktop: 195, desktop2: 165, desktop3: 135 },
  { month: "November", desktop: 250, desktop2: 220, desktop3: 190 },
  { month: "December", desktop: 320, desktop2: 290, desktop3: 260 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  desktop2: {
    label: "Desktop2",
    color: "hsl(var(--chart-1))",
  },
  desktop3: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

// interface Props {}

function RevenueReport() {
  // const {} = props

  return (
    <div className=" border  lineChart   ">
      <div>
        <div className=" flex  justify-between items-center topOptionbtn ">
          <span className="titelSection">Revenue Report</span>
          <YearSelector></YearSelector>
        </div>
        <div className="  blockCard   ">
          <TopDetailsBer
            iconColor={"#3C89EA"}
            TitleIcon={IoBriefcase}
            title={"invested"}
            data={chartData.reduce((sum, item) => sum + item.desktop, 0)}
          ></TopDetailsBer>
          <TopDetailsBer
            iconColor={"#29B062"}
            TitleIcon={IoBookmarks}
            title={"earnings"}
            data={chartData.reduce((sum, item) => sum + item.desktop2, 0)}
          ></TopDetailsBer>
          <TopDetailsBer
            iconColor={"#C720E7"}
            TitleIcon={BsFillLayersFill}
            title={"expenses"}
            data={chartData.reduce((sum, item) => sum + item.desktop2, 0)}
          ></TopDetailsBer>
        </div>
      </div>

      <div className="lineChartBer ">
        <ChartContainer config={chartConfig} className=" controlCharts " >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid
                vertical={true}
                horizontal={true}
                className="CartesianGrid"
                stroke="#b6b6b6"
                strokeOpacity={0.35}
                strokeDasharray={2.3}
              />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey="desktop"
                type="linear"
                stroke="#ED68FF"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="desktop2"
                type="linear"
                stroke="#4FD489"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="desktop3"
                type="linear" //linear & step
                stroke="#63B2F4"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
}

export default RevenueReport;
