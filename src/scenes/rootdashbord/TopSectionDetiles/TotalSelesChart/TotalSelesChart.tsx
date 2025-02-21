"use client";

import { Area, AreaChart, CartesianGrid } from "recharts";
// const { Area, AreaChart, CartesianGrid } = dynamic(() => import("recharts"), { ssr: false })

import { CardContent } from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import HydrationComponent from "@/components/HydrationComponent";
import TopDetilsSection from "./TopDetilsSection";

const chartData = [
  { month: "January", desktop: 186, desktop2: 332 },
  { month: "February", desktop: 305, desktop2: 132 },
  { month: "March", desktop: 237, desktop2: 52 },
  { month: "April", desktop: 73, desktop2: 550 },
  { month: "May", desktop: 209, desktop2: 30 },
  { month: "June", desktop: 214, desktop2: 552 },
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
      <div className="  min-w-56 w-full h-full overflow-hidden flex flex-col justify-between py-1 ">
        <TopDetilsSection></TopDetilsSection>

        <CardContent className=" p-0 ">
          <ChartContainer config={chartConfig}>
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
                stroke="#ccc"
                strokeOpacity={0.2}
              />
              {/* <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            /> */}
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Area
                dataKey="desktop"
                type="natural"
                fill="#215DD1"
                fillOpacity={0.4}
                stroke="#5db0fe"
              />
              <Area
                dataKey="desktop2"
                type="natural"
                fill="#215DD1"
                fillOpacity={0.4}
                stroke="#5db0fe"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </div>
    </HydrationComponent>
  );
}
