"use client";
import React from "react";
import {
  HiInbox,
  HiShoppingBag,
  HiUser,
  HiViewGridAdd,
} from "react-icons/hi";
import Sidebar from "./Sideber";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaSignOutAlt } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import Image from 'next/image';


const SideManu = ({ className: classname }: { className?: string }) => {
  //   const [collapsed, setCollapsed] = React.useState(false);
  const auth = useSession()

  return (
    <div className=" w-full md:h-[calc(100%-80px)] xl:h-[calc(100%-50px)] 2xl:xl:h-[calc(100%-10px)] flex flex-col justify-between ">
      <Sidebar className={`bg-slate-100/50 dark:bg-[#182a50] ${classname}`}>
        <Sidebar.Item Icon={HiViewGridAdd} to={"/"}>
          Deashbord
        </Sidebar.Item>
        <Sidebar.Collapse Icon={HiShoppingBag} label="E-commerce">
          <Sidebar.Item to={"/product"}>Products</Sidebar.Item>
          <Sidebar.Item to={"stock-status"}>Product Stock</Sidebar.Item>
          <Sidebar.Item to={""}>Refunds</Sidebar.Item>
          <Sidebar.Item to={""}>Shipping</Sidebar.Item>
        </Sidebar.Collapse>
        <Sidebar.Item Icon={HiInbox} to={""}>
          Inbox
        </Sidebar.Item>
        <Sidebar.Item Icon={HiUser} to={""}>
          Users
        </Sidebar.Item>
        {/* <Sidebar.Item Icon={HiArrowSmRight} to={""}>
          Sign In
        </Sidebar.Item>
        <Sidebar.Item Icon={HiTable} to={""}>
          Sign Up
        </Sidebar.Item> */}
      </Sidebar>
      {
        auth.status === "authenticated" &&
        <div className=" flex justify-between items-center p-4 " >
        <div className=" flex justify-between items-center gap-2 " >
          { auth.data.user?.image && <div className=" overflow-hidden w-12 h-12 border border-gray-600 rounded-full " >
            <Image src={auth.data.user?.image} alt={""} width={100} height={100} ></Image>
          </div>
          }
          <div>
            <h2>{auth?.data?.user?.name}</h2>
            <h2 className=" text-gray-500 text-sm " >ADMIN</h2>
          </div>
        </div>
        <button onClick={()=> signOut()} className=" text-3xl text-gray-300 " >
          <FaSignOutAlt></FaSignOutAlt>
        </button>
      </div>}
    </div>
  );
};

export default SideManu;
