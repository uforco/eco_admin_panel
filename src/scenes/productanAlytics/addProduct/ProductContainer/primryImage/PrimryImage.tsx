"use client";
import Image from "next/image";
import React from "react";
import { IoCamera } from "react-icons/io5";
import HydrationComponent from "@/components/HydrationComponent";

const PrimryImage = () => {
  const [image, setimage] = React.useState<string>("");
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Convert file to base64
      reader.onloadend = () => {
        setimage(reader.result as string);
      };
    }
  };

  return (
    <HydrationComponent>
      <div className=" primaryImage  ">
        <div className="imagecontainer">
          {image && (
            <Image
              className=" w-full h-full "
              src={image}
              width={200}
              height={200}
              alt={""}
            ></Image>
          )}
        </div>

        <div
          style={{
            height: `${image ? "40px" : "100%"}`,
          }}
          className=" uploadContainer hoverEfftOnImage  "
        >
          <div className=" mergeUploadIcon ">
            <label
              style={{ fontSize: `${image ? "32px" : "48px"}` }}
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
