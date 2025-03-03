"use client";
import React from "react";
import {
  HiArrowSmRight,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewGridAdd 
} from "react-icons/hi";
import Sidebar from "./Sideber";

const SideManu = ({className: classname}:{className?: string}) => {
  //   const [collapsed, setCollapsed] = React.useState(false);

  return (
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
        <Sidebar.Item Icon={HiArrowSmRight} to={""}>
          Sign In
        </Sidebar.Item>
        <Sidebar.Item Icon={HiTable} to={""}>
          Sign Up
        </Sidebar.Item>



        
      </Sidebar>
  );
};

export default SideManu;
