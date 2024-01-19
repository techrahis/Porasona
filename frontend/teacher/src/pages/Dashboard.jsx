import React from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const user = useSelector((state) => state.teacher.user);
  return (
    user && (
      <div>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        {user.email}
      </div>
    )
  );
};

export default Dashboard;
