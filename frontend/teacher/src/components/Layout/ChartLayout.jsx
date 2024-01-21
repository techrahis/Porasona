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
const ChartLayout = ({ children, states, heading, isStudent }) => {
  return (
    <div
      className="h-full w-full
        overflow-hidden p-4 px-8  sm:p-2
      text-black bg-white  rounded-md dark:bg-black"
    >
      <div className="flex justify-between items-center my-2 dark:text-white">
        <h1 className="text-base font-semibold">{heading}</h1>
        {!isStudent ? (
          <div className="flex space-x-3 text-sm font-semibold cursor-pointer">
            <p
              onClick={() => states.setType("all")}
              className={`${
                states.type === "all" ? "underline text-blue-500" : ""
              }`}
            >
              All
            </p>
            <p
              onClick={() => states.setType("month")}
              className={`${
                states.type === "month" ? "underline text-blue-500" : ""
              }`}
            >
              Monthly
            </p>
            <p
              onClick={() => states.setType("year")}
              className={`${
                states.type === "year" ? "underline text-blue-500" : ""
              }`}
            >
              Yearly
            </p>
          </div>
        ) : (
          <div>weekly</div>
        )}
      </div>

      {states.type === "month" && !isStudent && (
        <div className="my-4 w-[130px] dark:text-white relative space-y-2 group">
          <Select
            value={states.currentMonth}
            onValueChange={(value) => states.setCurrentMonth(value)}
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

      {states.type === "year" && !isStudent && (
        <div className="my-4 w-[130px] dark:text-white relative space-y-2 group">
          <Select
            value={states.currentYear}
            onValueChange={(value) => states.setCurrentYear(value)}
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
