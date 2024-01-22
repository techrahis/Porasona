import React, { useState } from "react";
import { monthlySalesData } from "../../data/saleData";
import { yearlySalesData } from "../../data/saleData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const ChartLayout = ({
  children,
  salesStates,
  studentStates,
  heading,
  isStudent,
}) => {
  return (
    <div
      className="h-full w-full
        overflow-hidden p-4 px-8  sm:p-2
      text-black bg-white  rounded-md dark:bg-black shadow-[0rem_0rem_1rem] shadow-indigo-500/20
      dark:shadow-popover"
    >
      <div className="flex justify-between items-center my-2 dark:text-white">
        <h1 className="text-base font-semibold sm:text-sm ml-4">{heading}</h1>
        {salesStates && !isStudent ? (
          <div className="flex gap-x-3 text-sm font-semibold sm:font-normal sm:text-[.7rem] cursor-pointer">
            <p
              onClick={() => salesStates.setType("all")}
              className={`${
                salesStates.type === "all" ? "underline text-blue-500" : ""
              }`}
            >
              All
            </p>
            <p
              onClick={() => salesStates.setType("month")}
              className={`${
                salesStates.type === "month" ? "underline text-blue-500" : ""
              }`}
            >
              Monthly
            </p>
            <p
              onClick={() => salesStates.setType("year")}
              className={`${
                salesStates.type === "year" ? "underline text-blue-500" : ""
              }`}
            >
              Yearly
            </p>
          </div>
        ) : (
          studentStates &&
          isStudent && (
            <div className="flex gap-x-3 text-sm font-semibold sm:font-normal sm:text-[.7rem] cursor-pointer">
              <p
                onClick={() => studentStates.setStudentType("weeks")}
                className={`${
                  studentStates.studentType === "weeks"
                    ? "underline text-blue-500"
                    : ""
                }`}
              >
                Weeks
              </p>
              <p
                onClick={() => studentStates.setStudentType("months")}
                className={`${
                  studentStates.studentType === "months"
                    ? "underline text-blue-500"
                    : ""
                }`}
              >
                Months
              </p>
            </div>
          )
        )}
      </div>

      {salesStates && salesStates.type === "month" && !isStudent && (
        <div className="my-4 w-[130px] dark:text-white relative space-y-2 group">
          <Select
            value={salesStates.currentMonth}
            onValueChange={(value) => salesStates.setCurrentMonth(value)}
          >
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              {monthlySalesData.map((item) => (
                <SelectItem key={item.month} value={item.month}>
                  {item.month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {salesStates && salesStates.type === "year" && !isStudent && (
        <div className="my-4 w-[130px] dark:text-white relative space-y-2 group">
          <Select
            value={salesStates.currentYear}
            onValueChange={(value) => salesStates.setCurrentYear(value)}
          >
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              {yearlySalesData.map((item) => (
                <SelectItem key={item.year} value={item.year}>
                  {item.year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="h-[55vh] w-full">{children}</div>
    </div>
  );
};

export default ChartLayout;
