import React, { useEffect, useState } from "react";
import { ResponsivePie } from "@nivo/pie";
import { monthlySalesData } from "../../../data/saleData";
import { useSelector } from "react-redux";
const MonthlySales = ({ month }) => {
  const [data, setData] = useState(null);
  const theme = useSelector((state)=>state.teacher.theme)
  useEffect(() => {
    setData(monthlySalesData.find((item) => item.month === month));
  },[month]);
  return (
    data && <ResponsivePie
      data={data.courses}
      margin={{ top: 40, right: 80, bottom: 30, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      colors={{ scheme: 'pink_yellowGreen' }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={theme==="dark"?"white":"black"}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
    />
  );
};

export default MonthlySales;
