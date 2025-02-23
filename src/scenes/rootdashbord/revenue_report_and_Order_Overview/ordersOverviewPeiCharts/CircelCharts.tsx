"use client";
import React from "react";
import TextDetails from "./TopDetailsBer";
// import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Ellipsis } from "lucide-react";

const chartData = [
  { status: "pending", report: 547, fill: "var(--color-pending)" },
  { status: "shipped", report: 398, fill: "var(--color-shipped)" },
  { status: "recieved", report: 605, fill: "var(--color-recieved)" },
  { status: "cancelled", report: 249, fill: "var(--color-cancelled)" },
  { status: "refunded", report: 176, fill: "var(--color-refunded)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  pending: {
    label: "Pending",
    color: "#DE2FFF",
  },
  shipped: {
    label: "Shipped",
    color: "#4094F1",
  },
  recieved: {
    label: "Recieved",
    color: "#27BF68",
  },
  cancelled: {
    label: "Cancelled",
    color: "#FF304F",
  },
  refunded: {
    label: "Refunded",
    color: "#EDB213",
  },
} satisfies ChartConfig;

function CircelCharts() {
  // const {} = props

  return (
    <div className=" CircelCharts ">
      <div className=" flex  justify-between items-center topOptionbtn ">
        <span className="titelSection" >
          orders overview
        </span>
        <button className=" rounded-full w-10 h-10 bg-transparent cursor-pointer ">
          <Ellipsis />
        </button>
      </div>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent nameKey="visitors" hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="report"
            nameKey="status"
            innerRadius={45}
            outerRadius={100}
            paddingAngle={4}
            cornerRadius={4}
            label={({
              cx,
              cy,
              midAngle,
              innerRadius,
              outerRadius,
              percent,
            }) => {
              const RADIAN = Math.PI / 180;
              const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);
              return (
                <text
                  x={x}
                  y={y}
                  fill="white"
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="text-sm font-bold"
                >
                  {`${(percent * 100).toFixed(0)}%`}
                </text>
              );
            }}
            labelLine={false}
          />
        </PieChart>
      </ChartContainer>
      <TextDetails chartData={chartData}></TextDetails>
    </div>
  );
}

export default CircelCharts;
