import TotalSelesChartComponent from "@/components/scenes/rootdashbord/TopSectionDetiles/TotalSelesChart/TotalSelesChart";
import PrifixCard from "@/components/scenes/rootdashbord/TopSectionDetiles/PrefixCardCharts/PrifixCard";
import { FaUserCircle } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { MdShoppingCart } from "react-icons/md";
import { IoStar } from "react-icons/io5";
// import CircelCharts from "@/scenes/rootdashbord/TopSectionDetiles/CircelCharts/CircelCharts";
import Main_section from '@/components/scenes/rootdashbord/revenue_report_and_Order_Overview/Main_section';
import { fetchingGet } from "@/utils/fetchingData";



export default async function Home() {

  const res = await fetchingGet('/dashborad/total-top-card')


  return (
    <div className=" h-full w-full ">
      {/* <RootDashborad></RootDashborad> */}
      <div className=" h-auto lg:h-[350px] overflow-hidden flex items-center w-full ditelCard ">
        <div className=" flex flex-col lg:grid grid-flow-col grid-cols-6 grid-rows-8  gap-4  w-full h-full ">
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
              total={res.LatsMonthOfProduct}
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
      {/* orders overview and Report section */}
      <div className=" mt-10 " >
       <Main_section></Main_section>
      </div>
    </div>
  );
}
