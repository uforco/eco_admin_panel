"use client";
import React from "react";
import PrimaryInfo from "./primaryInfo/Primary";
import "../addproduct.scss";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import PriceSection from "./priceSection/PriceSection";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";

import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";
import { resetState } from "@/redux/features/addProduct/addProductSlice";
import { addProductValidetion } from "@/utils/addProductValidetion";

// Error toast 
const FromErrorMes = (masg: string): void => {
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
        <div className=" toast-container ">{masg}</div>
      </div>
    ),
    { position: "top-right" }
  );
};



// Main file

const ProductContainer = () => {

  const data = useAppSelector((state) => state.addproduct);
  const dispatch = useAppDispatch();

  const [swit, setSwit] = React.useState("PrimaryInfo");
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


  const formHeandelar = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    toast.dismiss()
    
    if(addProductValidetion(data.product, FromErrorMes)) return
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/product`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({...data.product})
    })
    const resdata = await res.json()
    console.log(resdata)
    dispatch(resetState());
  };

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
