"use client";
import React from "react";
import { Drawer } from "vaul";
import ProductContainer from "./ProductContainer/ProductContainer";
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import "./addproduct.scss";

const AddProduct = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <>
      <Drawer.Root
        open={open}
        onOpenChange={setOpen}
        dismissible={false}
        direction="right"
      >
        <Drawer.Trigger className=" border flex items-center gap-3 addBtn ">
          <span>
            <FaPlus />
          </span>
          <span>Add Product</span>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 shadowFixdiv  bg-black/80" />
          <Drawer.Content
            className="right-0-0 top-0 bottom-0 fixed z-[200] outline-none  flex drawerManu"
            // The gap between the edge of the screen and the drawer is 8px in this case.
            style={
              {
                "--initial-transform": "calc(100% + 8px)",
              } as React.CSSProperties
            }
          >
            <Drawer.Title className=" hidden ">Edit profile</Drawer.Title>
            <Drawer.Description className=" h-full p-5 z-[300] addProductDescription pb-4 bg-slate-100/50 dark:bg-[#182a50] ">

              <div className=" flex justify-between p-4 py-2 items-center w-full font-semibold  ">
                <p> Add a New Product</p>
                <div className=" flex justify-end p-2 text-xl ">
                  <button
                    onClick={() => setOpen((priv) => !priv)}
                    className=" text-2xl "
                  >
                    <IoClose />
                  </button>
                </div>
              </div>

              {/* <div className=" h-full overflow-y-scroll no-srcolber containeScrollber" > */}
              <ProductContainer></ProductContainer>
              {/* </div> */}
            </Drawer.Description>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
};

export default AddProduct;
