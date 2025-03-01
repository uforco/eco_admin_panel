"use client";
import React, { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";
import {
  inputDataProduct,
  productSliceData,
} from "@/redux/features/addProduct/addProductSlice";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";

const BercodeGenared = () => {

  const data = useAppSelector(productSliceData);
  const dispatch = useAppDispatch();


  const barcodeRef = useRef<SVGSVGElement>(null);
  function generateBarcode() {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString(); // 10-digit unique number
  }
  useEffect(() => {
    if (barcodeRef.current) {
      JsBarcode(barcodeRef.current, data?.product?.bercode || "012345", {
        format: "CODE128",
        lineColor: "#000",
        width: 2,
        height: 25,
        displayValue: true,
      });
    }
  }, [data?.product?.bercode]);


  
  return (
    <div className="mb-6 inpurFill ">
      <label
        htmlFor="Ber-Code"
        className=" text-gray-300 dark:text-[#091C46] w-full "
      >
        Ber-Code
      </label>
      <div className=" flex gap-0  w-full ">
        <input
          value={data?.product?.bercode}
          maxLength={12}
          type="number"
          id="Ber-Code"
          placeholder="Type a Ber-Code Number or Generat ..."
          className=" w-full bg-gray-400 "
          onChange={(e) =>
            dispatch(inputDataProduct({ bercode: e?.target?.value }))
          }
        ></input>
      </div>
      <div className=" bercodeContainer ">
        <svg
          style={{ width: "100%" }}
          ref={barcodeRef}
          viewBox="0 0 200 52"
        ></svg>
        <button
        type='button'
          onClick={() =>
            dispatch(inputDataProduct({ bercode: generateBarcode() }))
          }
        >
          generator
        </button>
      </div>
    </div>
  );
};

export default BercodeGenared;
