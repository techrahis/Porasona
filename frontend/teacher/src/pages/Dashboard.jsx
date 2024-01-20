import React from "react";
import { Helmet } from "react-helmet-async";
import TotalEarnings from "@/components/shared/TotalEarnings";
import Card from "@/components/shared/Card";
import { AiOutlineDollar } from "react-icons/ai";
import { IoIosTrendingUp } from "react-icons/io";
import SalesChart from "@/components/Charts/SalesChart";
const Dashboard = () => {
  const data = {
    number: "5000",
    month: "100",
    total: "total enrollments",
    icon1: AiOutlineDollar,
    icon2: IoIosTrendingUp,
  };
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      {/* <TotalEarnings /> */}
      <div className="h-[60vh] w-[60%]
      overflow-x-hidden px-8 md:w-full text-black bg-white shadow-lg shadow-indigo-500/20 rounded-md dark:bg-black
      p-2 flex justify-center items-center">
        {/* <Card data={data} /> */}
        <SalesChart />
      </div>
    </div>
  );
};

export default Dashboard;
