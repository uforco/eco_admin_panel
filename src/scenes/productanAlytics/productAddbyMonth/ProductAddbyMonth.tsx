"use client";
import React, { useState } from "react";
import "./productAddbyMonth.scss";

import { Bar, BarChart, Cell, LabelList, XAxis, YAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  // ChartTooltipContent,
} from "@/components/ui/chart";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";


const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;
// swtBgColor


const map = new Map([
  ["January",  { month: "January", Product: 0 }],
  ["February",  { month: "February", Product: 0 }],
  ["March",  { month: "March", Product: 0 }],
  ["April",  { month: "April", Product: 0 }],
  ["May",  { month: "May", Product: 0 }],
  ["June",  { month: "June", Product: 0 }],
  ["July",  { month: "July", Product: 0 }],
  ["August",  { month: "August", Product: 0 }],
  ["September",  { month: "September", Product: 0 }],
  ["October",  { month: "October", Product: 0 }],
  ["November",  { month: "November", Product: 0 }],
  ["December",  { month: "December", Product: 0 }],
]);

interface Props {
  TotalProductCountMonth: { month: string, Product: number }[];
}


// main component
const ProductAddbyMonth = (props: Props) => {
const {TotalProductCountMonth} = props;
TotalProductCountMonth.forEach((obj) => {
  map.set(obj.month, obj);
});

const [swiMonth, setSwiMonth] = useState<[number, number]>([0,6])

const chartData = Array.from(map.values()).slice(swiMonth[0], swiMonth[1])

  return (
    <div className=" productAddbyMonth  boxBgColor  " >
      <div className=" titleName flex justify-between  " >
      Product Add  by Month
        <div className=" flex  gap-3 text-2xl " >
          <button onClick={()=> setSwiMonth([0, 6])} className=" monthSwit " >
            <IoMdArrowDropleftCircle></IoMdArrowDropleftCircle>
          </button>
          <button onClick={()=> setSwiMonth([6, 12])} className=" monthSwit " >
          <IoMdArrowDroprightCircle></IoMdArrowDroprightCircle>
          </button>
        </div>
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
            <XAxis type="number" dataKey="Product" hide />
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
            <Bar dataKey="Product" radius={[0, 30, 30, 0]} barSize={16}>
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index % 2 === 0 ? "#FF8F6B" : "#5B93FF"}
                />
              ))}

              <LabelList
                dataKey="Product"
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
