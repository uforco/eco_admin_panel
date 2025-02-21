import TotalSelesChartComponent from "@/scenes/rootdashbord/TopSectionDetiles/TotalSelesChart/TotalSelesChart";
import Totalproducts from "@/scenes/rootdashbord/TopSectionDetiles/totalusers/Totalproducts";
import TotalUsers from "@/scenes/rootdashbord/TopSectionDetiles/totalusers/TotalUsers";
import TotalOrders from "./../scenes/rootdashbord/TopSectionDetiles/totalusers/TotalOrders";
import TotalReviews from "@/scenes/rootdashbord/TopSectionDetiles/totalusers/TotalReviews";

export default function Home() {
  return (
    <div className=" h-full w-full ">
      {/* <RootDashborad></RootDashborad> */}
      <div className=" h-[320px] overflow-hidden flex items-center w-full ditelCard ">
        <div className=" grid grid-flow-col grid-cols-6 grid-rows-8  gap-4  w-full h-full ">
          <div className=" cardwiper " > <TotalUsers></TotalUsers></div>
          <div className=" cardwiper " > <Totalproducts></Totalproducts></div>
          <div className=" cardwiper " > <TotalOrders></TotalOrders></div>
          <div className=" cardwiper " > <TotalReviews></TotalReviews></div>
          <div className=" col-span-4 row-span-8 flex justify-center items-center  rounded-lg bg-gradient-to-t to-[#1E65FE] from-[#2064E5]/90 overflow-hidden ">
            <TotalSelesChartComponent></TotalSelesChartComponent>
          </div>
        </div>
      </div>
    </div>
  );
}
