import React from 'react';
import TotalProduct from '@/scenes/productanAlytics/totalProduct/TotalProduct';
import TotalSales from '@/scenes/productanAlytics/totalProduct/TotalSales';
import TopSellingProducts from '@/scenes/productanAlytics/top_Selling_Products/TopSellingProducts';


const Page = () => {
    return (
        <div>
            <div className=' flex gap-6 flex-col lg:flex-row ' >
                <TotalProduct ></TotalProduct>
                <TotalSales ></TotalSales>
            </div>
            <div  className=' w-[754px]  mt-6 ' >
                <TopSellingProducts></TopSellingProducts>
            </div>
        </div>
    );
};

export default Page;