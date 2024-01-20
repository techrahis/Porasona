import React from "react";
import { Helmet } from "react-helmet-async";
import TotalEarnings from "@/components/shared/TotalEarnings";
const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <TotalEarnings />
    </div>
  );
};

export default Dashboard;
