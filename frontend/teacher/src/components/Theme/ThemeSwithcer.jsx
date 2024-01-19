import React, { useEffect, useState } from "react";
import { MdSunny } from "react-icons/md";
import { RiMoonFill } from "react-icons/ri";
const ThemeSwithcer = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const getTheme = localStorage.getItem("theme");
    if (getTheme) {
      setTheme(getTheme);
    } else {
      setTheme(
        window.matchMedia("(prefers-color-schema:dark)").matches
          ? "dark"
          : "light"
      );
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
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
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
