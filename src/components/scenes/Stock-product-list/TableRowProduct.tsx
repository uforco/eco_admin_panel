'use client';
import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { StockProductType } from "@/redux/features/stock_product_list/stockProductList";
import Image from "next/image";
import StockControlleWithServer from "./StockControlleWithServer";

const TableRowProduct = ({
  inx,
  item,
}: {
  inx: number;
  item: StockProductType;
}) => {
  return (
    <TableRow
    
      className={`  rounded-lg capitalize ${ inx % 2 == 1? "rowOddNumber": "TableRow"  } TableRow   `}
    >
      <TableCell>{inx}</TableCell>

      <TableCell>
        <div className=" flex items-center gap-2 ">
          <div className={` w-12 h-12 rounded-lg overflow-hidden border bg-white `}>
            <Image
              src={item?.coverimage}
              alt={item?.product_name}
              width={80}
              height={80}
              className=" w-full h-full "
            ></Image>
          </div>
          <div>
            <p className=" capitalize font-medium text-lg ">
              {item?.product_name}
            </p>
            <p className=" text-sm ">
              {item?.short_Description.slice(0, 30)} ...
            </p>
          </div>
        </div>
      </TableCell>

      <TableCell>{item?.category}</TableCell>
      <TableCell>{item?.brand_name}</TableCell>
      <TableCell>${item?.price}</TableCell>
      <StockControlleWithServer stock_Status={item?.stock_Status} id={item?.id} ></StockControlleWithServer>
      <TableCell>{item?.rating}</TableCell>
      <TableCell>edit</TableCell>
    </TableRow>
  );
};

export default TableRowProduct;
