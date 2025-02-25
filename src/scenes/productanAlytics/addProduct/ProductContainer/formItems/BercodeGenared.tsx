'use client'
import React, { useEffect, useRef, useState } from "react";
import JsBarcode from "jsbarcode";

const BercodeGenared = () => {

    const barcodeRef = useRef<SVGSVGElement>(null);
  const [barcodeValue, setBarcodeValue] = useState<string>('');

  function generateBarcode() {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString(); // 10-digit unique number
  }

//   const inpurcode = () => {

//   }

    useEffect(() => {
        if (barcodeRef.current) {
          JsBarcode(barcodeRef.current, barcodeValue || '012345', {
            format: "CODE128",
            lineColor: "#000",
            width: 2,
            height: 25,
            displayValue: true,
          });
        }
      }, [barcodeValue]);

  return (
    <div className="mb-6 inpurFill ">
      <label
        htmlFor="Ber-Code"
        className=" text-gray-300 dark:text-[#091C46] w-full "
      >
        Ber-Code
      </label>
      <div className=" flex gap-0  w-full " >
        <input
            value={barcodeValue}
            onChange={(e) => setBarcodeValue(e?.target?.value?.toString())}
            maxLength={12}
          type="number"
          id="Ber-Code"
          className=" w-full bg-gray-400  "
        ></input>
      </div>
      <div className=" bercodeContainer " >
         <svg  style={{width: '100%' }} ref={barcodeRef} viewBox="0 0 200 52" ></svg>
        <button onClick={ ()=> setBarcodeValue(generateBarcode())} >generator</button>
      </div>
    </div>
  );
};

export default BercodeGenared;
