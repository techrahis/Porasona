import React from "react";
import { allSalesData } from "../../../data/saleData";
import { ResponsiveBar } from "@nivo/bar";
import isMobile from "../isMobile";
const AllSales = () => {
  const mobilePhone = isMobile();
  return (
    <ResponsiveBar
      data={allSalesData}
      keys={["earnings"]}
      indexBy="course"
      margin={{ top: 20, right: 10, bottom: 50, left: !mobilePhone? 70 : 50 }}
      padding={0.3}
      groupMode="grouped"
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors="#9d4edd"
      axisTop={null}
      axisRight={null}
      enableLabel={false}
      theme={{
        text: {
          fontSize: 12,
          fill: "#7f7f7f",
          outlineWidth: 0,
          outlineColor: "transparent",
        },
        axis: {
          domain: {
            line: {
              stroke: "#777777",
              strokeWidth: 1,
            },
          },
        },
      }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: !mobilePhone && "Course",
        legendPosition: "middle",
        legendOffset: 40,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: !mobilePhone && "Earning",
        legendPosition: "middle",
        legendOffset: -60,
        truncateTickAt: 0,
      }}
    />
  );
};

export default AllSales;
