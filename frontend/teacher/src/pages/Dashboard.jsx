import React from "react";
import { Helmet } from "react-helmet-async";
import Sidebar from "@/components/Navbar/Sidebar";
import Header from "@/components/Navbar/Header";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const user = useSelector((state) => state.teacher.user);
  return (
    user && (
      <div className="flex gap-x-4 md:gap-0 dark:text-white">
        <Sidebar />
        <div className="h-screen overflow-y-auto p-2 md:p-0  overflow-x-hidden relative w-full">
          <Header />
          <Helmet>
            <title>Dashboard</title>
          </Helmet>
          {user.email}
        </div>
      </div>
    )
  );
};

export default Dashboard;
