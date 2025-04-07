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
  Product: {
      label: "Product",
      color: "#4180FF",
    },
  } satisfies ChartConfig;


interface Props {
  TotalProductCountMonth: { month: string, Product: number }[];
}



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


const TotalProduct = (props: Props) => {
    const {TotalProductCountMonth} = props;
    TotalProductCountMonth.forEach((obj) => {
      map.set(obj.month, obj);
    });

    const chartData = Array.from(map.values())
    
  const totalb = chartData.reduce((acc, crr) =>  acc+ crr.Product, 0)

  console.log()


  return (
    <div className="  totalCardLineChartsSection  ">
      <div className="  topInfo w-full " >
        <div className=" leftside " >
            <p className=" icon productIcon " ><HiGiftTop></HiGiftTop></p>
            <div>
                <p className=" totalTitle " >Total Product</p>
                <p className=" totalData " >{totalb.toLocaleString('en-IN')}</p>
            </div>
        </div>
        <div className=" rightside " >+{chartData[new Date().getMonth()].Product} New Added</div>
      </div>


      <div className=" w-full  ChartContainerWiper  ">
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
              <linearGradient id="fillProduct" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={`#4180FF`} stopOpacity={0.8} />
                <stop offset="75%" stopColor={`#4180FF`} stopOpacity={0.3} />
              </linearGradient>
            </defs>}

            <Area
              dataKey="Product"
              type="natural"
              fill="url(#fillProduct)"
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
