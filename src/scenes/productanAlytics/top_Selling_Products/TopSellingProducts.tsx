import React from "react";
import "./topSellingProducts.scss";
import Link from "next/link";
import Image from "next/image"
import shows from '../../../../public/shows.png'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    name: "INV001",
    image: "",
    price: "2504457.00",
    totalOrder: "260",
    totalSales: "222",
  },
  {
    name: "INV002",
    image: "",
    price: "$150.00",
    totalOrder: "260",
    totalSales: "266",
  },
  {
    name: "INV003",
    image: "",
    price: "$150.00",
    totalOrder: "260",
    totalSales: "234",
  },
];




const TopSellingProducts = () => {
  return (
    <div className=" topSellingsection boxBgColor ">
      <div className=" flex justify-between titlesection ">
        <p>Top Selling Products</p>
        <Link href={""}>See More</Link>
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[20px] ">SN</TableHead>
              <TableHead className="w-[100px]" >Name</TableHead>
              <TableHead className=" text-center " >Price</TableHead>
              <TableHead className=" text-center " >Total Order</TableHead>
              <TableHead className=" text-center " >Total Sales</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice, inx) => (
              <TableRow className=" cardRow " key={invoice.name}>
                <TableCell className="font-medium ">{inx}</TableCell>
                <TableCell className=" flex items-center " >
                    <div className={`  imageCover `} >
                        <Image src={shows} alt={""} width={50} height={50} ></Image>
                    </div>
                    {invoice.name}

                </TableCell>
                <TableCell className=" textCenter  "  >{invoice.price}</TableCell>
                <TableCell className=" textCenter  " >{invoice.totalOrder}</TableCell>
                <TableCell className=" textCenter">
                  {invoice.totalSales}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TopSellingProducts;
