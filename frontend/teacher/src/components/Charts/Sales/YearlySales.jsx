import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { yearlySalesData } from "../../../data/saleData";
import isMobile from "../isMobile";
const YearlySales = ({year}) => {
  const mobilePhone = isMobile();
  const data = yearlySalesData.find((item)=>item.year===year);
  return (
    <ResponsiveBar
      data={data.earings}
      keys={[
        "total_earnings",
      ]}
      indexBy="month"
      margin={{ top: 20, right: 10, bottom: 50, left: !mobilePhone ? 70 : 50 }}
      padding={0.3}
      groupMode="grouped"
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors='#9ef01a'
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
      axisBottom={ {
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend:!mobilePhone && "Month",
        legendPosition:"middle",
        legendOffset: 40,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend:!mobilePhone && "Earning",
        legendPosition:"middle",
        legendOffset: -60,
        truncateTickAt: 0,
      }}

    />
  );
};

export default YearlySales;
