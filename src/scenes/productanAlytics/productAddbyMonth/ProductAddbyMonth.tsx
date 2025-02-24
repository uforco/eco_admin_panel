"use client";
import React from "react";
import "./productAddbyMonth.scss";

import { Bar, BarChart, Cell, LabelList, XAxis, YAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  // ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", desktop: 18 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 305 },
  { month: "April", desktop: 237 },
  { month: "May", desktop: 237 },
  { month: "Jun", desktop: 73 },
  { month: "July", desktop: 73 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;
// swtBgColor
const ProductAddbyMonth = () => {
  return (
    <div className=" productAddbyMonth  boxBgColor  " >
      <div className=" titleName " >
      Product Add  by Month
      </div>
      <div className=" h-full " >
        <ChartContainer config={chartConfig} className=" h-full " >
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -20,
              right: 20,
            }}
          >
            <XAxis type="number" dataKey="desktop" hide />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              // content={<ChartTooltipContent hideLabel />}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="p-2 bg-white overflow-hidden rounded-md shadow-md">
                      <p className="text-sm font-semibold text-gray-600 ">
                        {payload[0].payload.month}
                      </p>
                      {payload.map((entry, index) => (
                        <p key={index} className="text-xs text-gray-600">
                          {entry.name}: {entry.value}
                        </p>
                      ))}
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="desktop" radius={[0, 30, 30, 0]} barSize={16}>
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index % 2 === 0 ? "#FF8F6B" : "#5B93FF"}
                />
              ))}

              <LabelList
                dataKey="desktop"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default ProductAddbyMonth;
