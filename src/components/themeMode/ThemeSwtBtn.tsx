"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

function ThemeSwtBtn() {
  const { setTheme, theme } = useTheme();
  const [mode, setMode] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setMode(true);
    } else {
      setMode(false);
    }
  }, [theme]);
  const themeControlle = (modex: boolean) => {
    if(modex){
      setTheme("light")
      setMode(false);
    }else{
      setTheme("dark")
      setMode(true);
    }
  }
  return (
    <>
      <button onClick={() => themeControlle(mode)} className=" btnbg group w-10 h-10 rounded-full overflow-hidden flex justify-center items-center  border-0 p-1 transition-all duration-500 " >
        <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-0 transition-all dark:-rotate-90 dark:scale-100 text-gray-400 group-hover:text-gray-900 group-hover:dark:text-gray-100 " />

        <Moon className="absolute h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0 text-gray-600 group-hover:text-gray-900 group-hover:dark:text-gray-100 " />
      </button>
    </>
  );
}

export default ThemeSwtBtn;
