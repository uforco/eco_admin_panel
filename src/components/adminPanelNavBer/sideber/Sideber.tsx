'use client'
import Link from "next/link";
import React, { JSX } from "react";

interface MenuItemProps {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  to: string;
  children?: React.ReactNode;
}

interface MenuCollapse  {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children: React.ReactNode;
  label?: string;
}

 class Sidebar extends React.Component<{children: React.ReactNode, className?: string }> {
  
  static Item = MenuItem
  static Collapse = MenuCollams

  render() {
    const {children,  className: classname } = this.props
    return (
      <div className={` h-full px-2 py-4 pt-2 overflow-y-scroll bg-gray-50 dark:bg-[#112143]  ${classname} `}>
        <ul className="space-y-2 font-medium  ">
          {children}
        </ul>
      </div>
    )
  }
}
export default Sidebar


//MenuItem
function MenuItem(props: MenuItemProps): JSX.Element {
  const { Icon, to, children } = props;
  return (
    <li className=" group ">
      <Link
        href={to}
        className=" transition-all duration-200 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200/80 dark:hover:bg-gray-700 "
      >
        {Icon && (
          <Icon className="transition-all duration-300 text-gray-500 dark:text-gray-400 text-2xl dark:group-hover:text-gray-100 group-hover:text-gray-700 mr-2 "></Icon>
        )}
        <div className={` ${!Icon? "ml-1":"ml-0"} text-sm flex items-center justify-between w-full `} >
            {children}
        </div>
      </Link>
    </li>
  );
}



function MenuCollams(props: MenuCollapse){
  const { Icon, children, label } = props;
  const [showMenu, SetShowMenu] = React.useState<boolean>(false);
  return (
    <li>
      <button
        onClick={() => SetShowMenu((priv) => !priv)}
        type="button"
        className=" transition-all duration-200 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200/80 dark:hover:bg-gray-800 w-full group "
      >
        {Icon && (
          <Icon className="transition-all duration-300 text-gray-500 dark:text-gray-400 text-2xl dark:group-hover:text-gray-100 group-hover:text-gray-700 mr-2 "></Icon>
        )}
        <div className=" text-sm flex items-center justify-between w-full " >
            {label}
        </div>
        <svg
          className={`w-3 h-3 ${
            showMenu ? "rotate-90" : "rotate-0"
          } transition-all `}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        className={`${
          showMenu ? " block " : " hidden "
        } transition-all duration-1000 `}
      >
        <ul
          className={` ${
            showMenu ? " h-auto " : "h-0  "
          } py-2 space-y-2 ml-4 overflow-hidden transition-all duration-1000 `}
        >
          {children}
        </ul>
      </div>
    </li>
  );
};


