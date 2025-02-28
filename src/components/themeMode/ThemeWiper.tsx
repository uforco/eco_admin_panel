'use client'
import React from "react";
import dynamic from "next/dynamic";
import { Toaster } from 'react-hot-toast';
const ThemeProvider = dynamic(() => import("./ThemeProviderwiper"), { ssr: false })
interface Props {
  children: React.ReactNode;
}
function ThemeWiper(props: Props) {
  const { children } = props;
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Toaster ></Toaster>
      {children}
    </ThemeProvider>
  );
}
export default ThemeWiper;
