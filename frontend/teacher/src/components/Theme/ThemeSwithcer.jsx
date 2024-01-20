import React, { useEffect, useState } from "react";
import { MdSunny } from "react-icons/md";
import { RiMoonFill } from "react-icons/ri";
import { toogleTheme } from "@/redux/Slice";
import { useDispatch, useSelector } from "react-redux";
const ThemeSwithcer = () => {
  const theme = useSelector((state)=>state.teacher.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!theme) {
      dispatch(toogleTheme(
        window.matchMedia("(prefers-color-schema:dark)").matches
          ? "dark"
          : "light"
      ));
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    dispatch(toogleTheme(newTheme));
  };

  return (
    <div
      onClick={handleTheme}
      className={`flex py-2 px-1 cursor-pointer 
      h-[1.8rem] w-[3.5rem] text-2xl items-center overflow-hidden rounded-[10rem]
      transition-all ease-linear duration-300`}
    >
      {theme === "dark" ? (
        <div className="w-full flex justify-center text-indigo-600">
          <RiMoonFill />
        </div>
      ) : (
        <div className="w-full flex justify-center text-yellow-500">
          <MdSunny />
        </div>
      )}
    </div>
  );
};

export default ThemeSwithcer;
