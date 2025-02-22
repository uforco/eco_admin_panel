import TotalSelesChartComponent from "@/scenes/rootdashbord/TopSectionDetiles/TotalSelesChart/TotalSelesChart";
import PrifixCard from "@/scenes/rootdashbord/TopSectionDetiles/PrefixCardCharts/PrifixCard";
import { FaUserCircle } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { MdShoppingCart } from "react-icons/md";
import { IoStar } from "react-icons/io5";
// import CircelCharts from "@/scenes/rootdashbord/TopSectionDetiles/CircelCharts/CircelCharts";
import Main_section from '@/scenes/rootdashbord/revenue_report_and_Order_Overview/Main_section';


export default function Home() {
  return (
    <div className=" h-full w-full ">
      {/* <RootDashborad></RootDashborad> */}
      <div className=" h-[350px] overflow-hidden flex items-center w-full ditelCard ">
        <div className=" grid grid-flow-col grid-cols-6 grid-rows-8  gap-4  w-full h-full ">
          <div className=" cardwiper ">
            <PrifixCard
              title={"total users"}
              TitleIcon={FaUserCircle}
              total={"266"}
              monthProfit={"25"}
              className={"usercardscss"}
            ></PrifixCard>
          </div>
          <div className=" cardwiper ">
            <PrifixCard
              title={"Total Products"}
              TitleIcon={GiShoppingBag}
              total={"277"}
              monthProfit={"29"}
              className={"totalproductsscss"}
            ></PrifixCard>
          </div>
          <div className=" cardwiper ">
            <PrifixCard
              title={"Total Orders"}
              TitleIcon={MdShoppingCart}
              total={"300"}
              monthProfit={"50"}
              className={"totalOrdersscss"}
            ></PrifixCard>
          </div>
          <div className=" cardwiper ">
            <PrifixCard
              title={"Total Reviews"}
              TitleIcon={IoStar}
              total={"166"}
              monthProfit={"20"}
              className={"totalreviewsscss"}
            ></PrifixCard>
          </div>
          <div className=" col-span-4 row-span-8 flex justify-center items-center  rounded-lg bg-gradient-to-t to-[#1E65FE] from-[#4975d6] overflow-hidden ">
            <TotalSelesChartComponent></TotalSelesChartComponent>
          </div>

        </div>
      </div>
      <div className=" mt-10 " >
       <Main_section></Main_section>
      </div>
    </div>
  );
}
