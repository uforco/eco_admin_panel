"use client";
import {
  StockProductType,
  useGetStockProductListApiQuery,
} from "@/redux/features/stock_product_list/stockProductList";
import TableRowProduct from "./TableRowProduct";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const Product_list = () => {
  const { data, error, isLoading, isSuccess } =
    useGetStockProductListApiQuery(undefined);

  // console.log(data)

  const [filters, setFilters] = React.useState({
    showby: '12', 
    ratingby: '', 
    category: '',
    brandBy: ''       
  })

  let containe: React.ReactNode = <div></div>;

  if (isLoading) {
    containe = (
      <div className=" flex justify-center items-center w-full h-full ">
        Loading...
      </div>
    );
  }
  if (error) {
    containe = (
      <div className=" flex justify-center items-center w-full h-full ">
        someting is warong...
      </div>
    );
  }
  if (isSuccess && data.length < 1) {
    containe = (
      <div className=" flex justify-center items-center w-full h-full ">
        No Data Found
      </div>
    );
  }
  if (isSuccess && data.length) {
    containe = data
      .slice(0, Number(filters.showby))
      .filter((product:StockProductType) => {
        const ratingbyCondition = filters?.ratingby? product.rating === Number(filters?.ratingby) : true;

        const categoryCondition = filters.category? product.category === filters.category : true;

        const brandByCondition = filters.brandBy !== undefined ? product.brand_name > filters.brandBy : true;


        return ratingbyCondition && categoryCondition && brandByCondition
      })
      .map((item: StockProductType, inx: number) => (
        <TableRowProduct key={item.id} inx={inx} item={item}></TableRowProduct>
      ))
  }

  return (
    <div >
        <div className=" w-full  flex justify-between items-center gap-4  " >
            
            <div className=" filterCard w-full p-1 ">
                <label htmlFor="sortby" className=" labeltitle  ">Show by</label>
                <select id="sortby" value={filters.showby} onChange={(e: React.ChangeEvent<HTMLSelectElement>)=> {
                    setFilters((priv) => ({...priv, showby: e.target.value}))
                }} className=" p-2 px-1  rounded-sm ">
                    <option  selected value="12">12 Row</option>
                    <option  value="24">24 Row</option>
                    <option  value="36">36 Row</option>
                </select>
            </div>
            <div className=" filterCard w-full p-1 ">
                <label htmlFor="ratingby" className=" labeltitle  ">rating by</label>
                <select id="ratingby"
                value={filters.ratingby} 
                onChange={(e: React.ChangeEvent<HTMLSelectElement>)=> {
                    setFilters((priv) => ({...priv, ratingby: e.target.value}))
                }}
                className=" p-2 px-1  rounded-sm ">
                    <option  selected value="1">1 Star</option>
                    <option  value="2">2 Star</option>
                    <option  value="3">3 Star</option>
                    <option  value="4">4 Star</option>
                </select>
            </div>
            <div className=" filterCard w-full p-1 ">
                <label htmlFor="categoryby" className=" labeltitle  ">category by</label>
                <select id="categoryby" 
                value={filters.category} 
                onChange={(e: React.ChangeEvent<HTMLSelectElement>)=> {
                    setFilters((priv) => ({...priv, category: e.target.value}))
                }}
                className=" p-2 px-1  rounded-sm ">
                    <option  selected value="">Select</option>
                    <option  value="vegetables">Vegetables</option>
                    <option  value="fish">Fish</option>
                    <option  value="bakery">Bakery</option>
                    <option  value="oil">Oil</option>
                    <option  value="snacks">Snacks</option>
                </select>
            </div>
            <div className=" filterCard w-full p-1 ">
                <label htmlFor="brandBy" className=" labeltitle  ">brand by</label>
                <select id="brandBy" 
                value={filters.brandBy} 
                onChange={(e: React.ChangeEvent<HTMLSelectElement>)=> {
                    setFilters((priv) => ({...priv, brandBy: e.target.value}))
                }}
                className=" p-2 px-1  rounded-sm ">
                    <option  selected value="">Select</option>
                    <option  value="vegetables">Vegetables</option>
                    <option  value="fish">Fish</option>
                    <option  value="bakery">Bakery</option>
                    <option  value="oil">Oil</option>
                    <option  value="snacks">Snacks</option>
                </select>
            </div>
            



        </div>
        <div style={{ minHeight: "525px" }} >

        
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-4 capitalize ">UID</TableHead>
            <TableHead
              style={{ width: "300px" }}
              className=" capitalize overflow-hidden "
            >
              Product
            </TableHead>
            <TableHead className=" capitalize ">Category</TableHead>
            <TableHead className=" capitalize ">Brand</TableHead>
            <TableHead className=" capitalize ">Price</TableHead>
            <TableHead className=" capitalize ">Stock</TableHead>
            <TableHead className=" capitalize ">Rating</TableHead>
            <TableHead className=" capitalize ">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>{containe}</TableBody>
      </Table>
      </div>
    </div>
  );
};

export default Product_list;
