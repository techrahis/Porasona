import React from "react";
import { sidebarItems } from "./SidebarItems";
import { RxCross2 } from "react-icons/rx";
import { Button } from "../ui/button";
import ThemeSwithcer from "../Theme/ThemeSwithcer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toogleSidebar, logout } from "@/redux/Slice";

import Logo from "./Logo";
const Sidebar = () => {
  const navigate = useNavigate();
  const showSidebar = useSelector((state) => state.teacher.open);
  const dispatch = useDispatch();
  return (
    <aside>
      <nav
        className={`flex flex-col gap-y-[5rem] h-screen bg-white dark:bg-black z-[100] relative
    dark:text-white shadow-[0_.5rem_1.5rem_rgba(0,0,0,0.2)] w-[200px] md:absolute md:w-[250px] ${
      showSidebar
        ? "md:left-0 transition-all ease-linear duration-300"
        : "md:left-[-110%]  transition-all ease-linear duration-300"
    } relative`}
      >
        <div
          className="absolute top-0 right-0 text-xl bg-blue-600 p-1 text-white font-semibold cursor-pointer hidden md:block"
          onClick={() => dispatch(toogleSidebar(false))}
        >
          <RxCross2 />
        </div>
        <div className="m-4">
          <Logo />
        </div>

        <ul className="flex flex-col gap-y-4">
          {sidebarItems.map((item) => (
            <li
              key={item.id}
              className={` ${
                location.pathname === item.path
                  ? "bg-blue-50 dark:bg-gray-100  dark:border-gray-500 dark:text-black border-blue-600 border-r-[.4rem]"
                  : ""
              }
             hover:bg-blue-50 hover:dark:bg-gray-100  hover:border-r-[.4rem] hover:dark:text-black
             hover:dark:border-gray-500
              hover:border-blue-600
             p-3 px-6  transition-all ease-linear duration-300 cursor-pointer`}
              onClick={() => {
                navigate(item.path);
                dispatch(toogleSidebar(false));
              }}
            >
              <div className="flex items-center gap-x-4">
                <h2 className="text-xl text-gray-500">{<item.icon />}</h2>
                <h2 className="text-sm font-semibold">{item.name}</h2>
              </div>
            </li>
          ))}
        </ul>

        <div
          className="absolute bottom-0 left-0 right-0 border-t py-4 
        border-gray-300 dark:border-gray-500"
        >
          <div className="flex items-center px-4 justify-between">
            <div onClick={() => dispatch(logout())}>
              <Button variant="logout">Logout</Button>
            </div>
            <div className="w-fit">
              <ThemeSwithcer />
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
