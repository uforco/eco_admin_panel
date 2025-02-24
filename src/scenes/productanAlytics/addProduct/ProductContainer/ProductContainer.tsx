import React from "react";
import "../addproduct.scss";
import PrimryImage from "./primryImage/PrimryImage";

const ProductContainer = () => {
  return (
    <div className=" pt-5 ">
      <div className=" flex justify-center items-center w-full font-semibold ">
        Add a New Product
      </div>
      <div className=" flex justify-center " >
        <PrimryImage></PrimryImage>
      </div>
    </div>
  );
};

export default ProductContainer;
