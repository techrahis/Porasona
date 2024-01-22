import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import TotalEarnings from "@/components/shared/TotalEarnings";
import Card from "@/components/shared/Card";
import YearlySales from "@/components/Charts/Sales/YearlySales";
import MonthlySales from "@/components/Charts/Sales/MonthlySales";
import ChartLayout from "@/components/Layout/ChartLayout";
import AllSales from "@/components/Charts/Sales/AllSales";
import BestsellingCourse from "@/components/shared/BestsellingCourse";
import { courses, cardData } from "@/data/bestSelling";
import WeeklyEnrolled from "@/components/Charts/Students/WeeklyEnrolled";
import MonthlyEnrolled from "@/components/Charts/Students/MonthlyEnrolled";
const Dashboard = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(
    new Date().toLocaleString("default", { month: "long" })
  );
  const [type, setType] = useState("all");
  const [studentType, setStudentType] = useState("weeks");

  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <div className="h-full w-[99%] m-auto md:w-[95%] grid grid-cols-[auto,25rem] gap-6 mt-6 lg:grid-cols-1 md:mt-20">
        <div className="w-full flex flex-col gap-y-4">
          <div className="my-2 gap-x-4 flex items-center w-full md:grid md:grid-cols-2 md:gap-8 md:justify-center sm:grid-cols-1">
            <Card data={cardData} />
            <Card data={cardData} />
            <Card data={cardData} />
          </div>

          <ChartLayout
            salesStates={{
              type,
              setType,
              currentMonth,
              setCurrentMonth,
              currentYear,
              setCurrentYear,
            }}
            heading={"Earning Reports"}
            isStudent={false}
          >
            {type === "all" ? (
              <AllSales />
            ) : type === "month" ? (
              <MonthlySales month={currentMonth} />
            ) : (
              <YearlySales year={currentYear} />
            )}
          </ChartLayout>

          <div className="mt-4 mb-8">
            <ChartLayout
              heading={"Students"}
              isStudent={true}
              studentStates={{ studentType, setStudentType }}
            >
              {studentType === "weeks" ? (
                <WeeklyEnrolled />
              ) : (
                <MonthlyEnrolled />
              )}
            </ChartLayout>
          </div>
        </div>

        <div className="w-full my-2">
          <TotalEarnings />
          <div className="my-6">
          <BestsellingCourse courses={courses} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
