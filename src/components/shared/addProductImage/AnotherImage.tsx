"use client";
import Image from "next/image";
import React from "react";
import { IoCamera, IoClose } from "react-icons/io5";
import HydrationComponent from "@/components/HydrationComponent";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { deleteImage, imageIncludes, productSliceData } from "@/redux/features/addProduct/addProductSlice";

interface Props {
  imageCounter: number;
}

const AnotherImage = (props: Props) => {
  
  const { imageCounter } = props;
  
  const data = useAppSelector(productSliceData);
  const dispatch = useAppDispatch()


  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Convert file to base64
      reader.onloadend = () => {
        dispatch(imageIncludes({position: imageCounter, image: reader.result as string}))
      };
    }
  };

  return (
    <HydrationComponent>
      <div className=" anotherImages  ">
        <div className="imagecontainer">
          {data?.product?.image[imageCounter] && (
            <Image
              className=" w-full h-full "
              src={data?.product?.image[imageCounter]}
              width={200}
              height={200}
              alt={""}
            ></Image>
          )}
        </div>

        <button
        type="button"
          onClick={() => {
            // setimage([imageCounter, ''])
            dispatch(deleteImage({ position: imageCounter, image: '' }))
          }}
          style={{
            display: `${!data?.product?.image[imageCounter] ? "none" : "flex"}`,
          }}
          className=" deleteimage "
        >
          <IoClose></IoClose>
        </button>

        <div
          style={{
            display: `${data?.product?.image[imageCounter] ? "none" : "block"}`,
          }}
          className=" uploadContainer hoverEfftOnImage  "
        >
          <div className=" mergeUploadIcon ">
            <label
              htmlFor={`otherimage_${imageCounter}`}
              className=" uploadicon "
            >
              <IoCamera></IoCamera>
            </label>
            <input
              id={`otherimage_${imageCounter}`}
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

export default AnotherImage;
