import React from "react";
import TotalProduct from "@/scenes/productanAlytics/totalProduct/TotalProduct";
import TotalSales from "@/scenes/productanAlytics/totalProduct/TotalSales";
import TopSellingProducts from "@/scenes/productanAlytics/top_Selling_Products/TopSellingProducts";
import ProductAddbyMonth from "@/scenes/productanAlytics/productAddbyMonth/ProductAddbyMonth";
import ProductSalesAnalytics from "@/scenes/productanAlytics/productSalesAnalytics/ProductSalesAnalytics";
import AddProduct from '@/scenes/productanAlytics/addProduct/AddProduct';

const Page = () => {
  return (
    <div className=" h-full " >
      <div className=" w-full flex items-center justify-end mb-6 " >
        <AddProduct></AddProduct>
      </div>
      <div className=" flex gap-6 w-full flex-col lg:flex-row  overflow-hidden ">
        <div className=" w-full xl:w-8/12 h-auto  ">
          <div className=" flex gap-6 flex-col md:flex-row w-full ">
            <TotalProduct></TotalProduct>
            <TotalSales></TotalSales>
          </div>
          <div className=" w-full  mt-6  ">
            <TopSellingProducts></TopSellingProducts>
          </div>
        </div>
        <div className=" w-full   xl:w-4/12  h-full lg:h-auto hidden xl:flex flex-col gap-6 ">
          <div className=" w-full  ">
            <ProductAddbyMonth></ProductAddbyMonth>
          </div>
          <div className=" w-full h-[300px] ">
            <ProductSalesAnalytics></ProductSalesAnalytics>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
