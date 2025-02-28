"use client";

import Image from "next/image";
import React from "react";
import { IoCamera } from "react-icons/io5";
import HydrationComponent from "@/components/HydrationComponent";
import'./imagecss.scss'
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { imageIncludes, productSliceData } from "@/redux/features/addProduct/addProductSlice";

const PrimryImage = () => {

  const data = useAppSelector(productSliceData);
  const dispatch = useAppDispatch()


  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Convert file to base64
      reader.onloadend = () => {
        dispatch(imageIncludes({position: 0, image: reader.result as string}))
      };
    }
  };

  


  return (
    <HydrationComponent>
      <div className=" primaryImage  ">
        <div className="imagecontainer">
          {data?.product?.image[0] && (
            <Image
              className=" w-full h-full "
              src={data?.product?.image[0]}
              width={200}
              height={200}
              alt={""}
            ></Image>
          )}
        </div>

        <div
          style={{
            height: `${data?.product?.image[0] ? "40px" : "100%"}`,
          }}
          className=" uploadContainer hoverEfftOnImage  "
        >
          <div className=" mergeUploadIcon ">
            <label
              style={{ fontSize: `${data?.product?.image[0] ? "32px" : "48px"}` }}
              htmlFor="primaryimg"
              className=" uploadicon "
            >
              <IoCamera></IoCamera>
            </label>
            <input
              id="primaryimg"
              onChange={handleImageChange}
              className=" uploadImg "
              type="file"
              accept="image/*"
            />
          </div>
        </div>
      </div>
    </HydrationComponent>
  );
};

export default PrimryImage;
