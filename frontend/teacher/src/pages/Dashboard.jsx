import { Helmet } from "react-helmet-async";
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
    </div>
  );
};

export default Dashboard;
