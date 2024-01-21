import React from "react";
import Sidebar from "@/components/Navbar/Sidebar";
import Header from "@/components/Navbar/Header";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="flex gap-x-2 md:gap-0 dark:text-white">
      <Sidebar />
      <div className="h-screen overflow-y-auto p-2 md:p-0  overflow-x-hidden relative w-full">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
