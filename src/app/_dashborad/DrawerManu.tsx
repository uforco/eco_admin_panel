"use client";
import HydrationComponent from "@/components/HydrationComponent";
import "./drawermanu.scss";
import * as React from "react";

import { Drawer } from "vaul";

const DrawerManu = ({
  children,
  drawer,
  drawerOpen,
}: {
  children: React.ReactNode;
  drawer: () => void;
  drawerOpen: boolean;
}) => {
  return (
    <HydrationComponent>
      <Drawer.Root open={drawerOpen} onOpenChange={drawer} direction="left">
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0  bg-black/40" />
          <Drawer.Content
            className="left-0 top-0 bottom-0 fixed z-[200] outline-none w-[310px] flex drawerManu"
            // The gap between the edge of the screen and the drawer is 8px in this case.
            style={
              {
                "--initial-transform": "calc(100% + 8px)",
              } as React.CSSProperties
            }
          >
            <Drawer.Title className=" hidden ">Edit profile</Drawer.Title>
            <Drawer.Description className=" h-full w-96 z-[300] border pb-4 bg-slate-100/50 dark:bg-[#182a50] " >
            <div className=" p-4 px-5 text-2xl font-extrabold text-[#3B82F6] ">
                ECO.DEV
              </div>
            {children}
            </Drawer.Description>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </HydrationComponent>
  );
};

export default DrawerManu;
