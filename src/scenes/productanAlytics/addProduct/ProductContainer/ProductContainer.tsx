"use client";
import React from "react";
import PrimaryInfo from "./primaryInfo/Primary";
import "../addproduct.scss";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import PriceSection from "./priceSection/PriceSection";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";


import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";
import { increment, resetState } from "@/redux/features/addProduct/addProductSlice";

const ProductContainer = () => {
  const data = useAppSelector((state) => state.addproduct);
  const dispatch = useAppDispatch();

  const [swit, setSwit] = React.useState("AdditionalInfo");
  const typeContaine = ["PrimaryInfo", "PriceSection", "AdditionalInfo"];
  let containe: React.ReactNode = <PrimaryInfo></PrimaryInfo>;
  if (swit === typeContaine[0]) {
    containe = <PrimaryInfo></PrimaryInfo>;
  }
  if (swit === typeContaine[1]) {
    containe = <PriceSection></PriceSection>;
  }
  if (swit === typeContaine[2]) {
    containe = <AdditionalInfo></AdditionalInfo>;
  }

  const formHeandelar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // addProduct_Validation(e)

    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } w-96 bg-white text-black SaveProductEorror `}
        >
          <button onClick={() => toast.dismiss(t.id)}>
            <IoClose></IoClose>
          </button>
          <div className=" toast-container ">sdfhdfrh</div>
        </div>
      ),
      { position: "top-right" }
    );


    dispatch(resetState())

    
  };
  

  const getdata2 = () => {
    dispatch(increment({
      product_bercode: '34634657',
      product_name: 'name of product with test',
      brand_name: 'brand name of',
      brand_logo: 'logo',
      image: ['iamge1', 'image2', 'image3'],
      qty: 2,
      scale: 'kg',
      price: 200.66,
      discount: 10,
      type: 'food type',
      category: 'vagetables',
      short_Description: 'short_dis_cripct',
      description: 'long discript'
    }))
    
  }
  const getdata = () => {
    console.log(data)
    
  }

  // const getdata = () => {
  //   dispatch(increment({
  //     product_bercode: '34634657',
  //     product_name: 'name of product with test',
  //     brand_name: 'brand name of',
  //     brand_logo: 'logo',
  //     image: ['iamge1', 'image2', 'image3'],
  //     qty: 2,
  //     scale: 'kg',
  //     price: 200.66,
  //     discount: 10,
  //     type: 'food type',
  //     category: 'vagetables',
  //     short_Description: 'short_dis_cripct',
  //     description: 'long discript'
  //   }))
  // };

  return (
    <div className=" h-full addFromStyle ">
      <div className=" inpurFill flex justify-between ">
        <button
          onClick={() => setSwit(typeContaine[0])}
          className={` border-b fromSwit px-5 py-1 text-sm w-full  ${
            swit === typeContaine[0] ? "activeFormBtn" : "fromSwit"
          } `}
        >
          Primary
        </button>
        <button
          onClick={() => setSwit(typeContaine[1])}
          className={` border-b fromSwit px-5 py-1 text-sm w-full  ${
            swit === typeContaine[1] ? "activeFormBtn" : "fromSwit"
          } `}
        >
          Price
        </button>
        <button
          onClick={() => setSwit(typeContaine[2])}
          className={` border-b fromSwit px-5 py-1 text-sm w-full  ${
            swit === typeContaine[2] ? "activeFormBtn" : "fromSwit"
          } `}
        >
          Additional
        </button>
      </div>

      <div className=" h-full overflow-y-scroll no-srcolber containeScrollber w-full ">
        <button onClick={getdata} className=" p-2 ">
          get data
        </button>
        <button onClick={getdata2} className=" p-2 ">
          del img
        </button>
        <div className=" pt-5 overflow-hidden p-4 w-full  ">
          <form
            className=" w-full h-full productFrom "
            onSubmit={formHeandelar}
            action=""
          >
            {containe}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
