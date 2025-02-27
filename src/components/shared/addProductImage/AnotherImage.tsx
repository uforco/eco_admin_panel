"use client";
import Image from "next/image";
import React from "react";
import { IoCamera, IoClose } from "react-icons/io5";
import HydrationComponent from "@/components/HydrationComponent";


interface Props {
    imageCounter: number | string;
}

const AnotherImage = (props: Props) => {

    const {imageCounter} = props;

  const [image, setimage] = React.useState<string>("");

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <div className=" anotherImages  ">
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

        <button
          onClick={() => setimage("")}
          style={{
            display: `${!image ? "none" : "flex"}`,
          }}
          className=" deleteimage "
        >
          <IoClose></IoClose>
        </button>

        <div
          style={{
            display: `${image ? "none" : "block"}`,
          }}
          className=" uploadContainer hoverEfftOnImage  "
        >
          <div className=" mergeUploadIcon ">
            <label htmlFor={`otherimage_${imageCounter}`} className=" uploadicon ">
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
