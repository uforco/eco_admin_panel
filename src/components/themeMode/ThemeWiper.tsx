'use client'
import React from "react";
import dynamic from "next/dynamic";
const ThemeProvider = dynamic(() => import("./theme-provider"), { ssr: false })
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
      {children}
    </ThemeProvider>
  );
}
export default ThemeWiper;
