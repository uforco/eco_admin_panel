"use client";

import { Area, AreaChart, CartesianGrid} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import HydrationComponent from "@/components/HydrationComponent";
import TopDetilsSection from "./TopDetilsSection";

const chartData = [
  { month: "January", desktop: 30, desktop2: 332 },
  { month: "February", desktop: 20, desktop2: 132 },
  { month: "March", desktop: 30, desktop2: 52 },
  { month: "April", desktop: 30, desktop2: 550 },
  { month: "May", desktop: 40, desktop2: 30 },
  { month: "June", desktop: 10, desktop2: 752 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;



export default function TotalSelesChartComponent() {
  return (
    <HydrationComponent>
      <div className="  min-w-56 w-full h-full overflow-hidden flex flex-col justify-between py-1 totalSalesLineBer  ">
        <TopDetilsSection></TopDetilsSection>

        {/* <div className=" TotalselesCard p-5 m-5 h-full border  border-red-500 "> */}
          <ChartContainer config={chartConfig} className=" salesCharts " >
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 2,
                right: 2,
                bottom: 2,
              }}
            >
              <CartesianGrid
                vertical={true}
                horizontal={true}
                stroke="#b6b6b6"
                strokeOpacity={0.35}
                strokeDasharray={2.3}
              />
              {/* <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
              tick={ <CustomXAxisTick/> }
            /> */}
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <defs>
                <linearGradient id="colorDesktop2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="30%" stopColor="#165fff" stopOpacity={0.7} />
                  <stop offset="100%" stopColor="#215DD1" stopOpacity={0} />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <Area
                dataKey="desktop"
                type="natural"
                fill="url(#colorDesktop2)"
                fillOpacity={1}
                stroke="#5db0fe"
                strokeWidth={1.5}
                filter="url(#glow)"
              />
            </AreaChart>
          </ChartContainer>
        {/* </div> */}
      </div>
    </HydrationComponent>
  );
}

// const CustomXAxisTick = (props: any) => {
//   const { x, y, payload } = props;
//   return (
//     <text
//       x={x}
//       y={y}
//       dy={10} // Adjust vertical positioning
//       textAnchor="middle"
//       className="fill-red-500 text-sm font-bold"
//     >
//       {payload.value.slice(0, 3)}
//     </text>
//   );}