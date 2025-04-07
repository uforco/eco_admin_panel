
import React from "react";
import './stock_product.scss'
import Product_list from '@/components/scenes/Stock-product-list/Product_list';

const page = () => {
  return (
    <div className=" stock_product " >
      <div className=" dark:bg-[#182A50]  bg-slate-100 rounded-lg p-2" >
        <Product_list></Product_list>
      </div>
    </div>
  );
};

export default page;
