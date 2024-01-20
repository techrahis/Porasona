import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import Scheduler from "./pages/Scheduler";
import Reviews from "./pages/Reviews";
import PrivateRoutes from "./components/Layout/PrivateRoutes";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./components/Layout/Layout";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Routes>
        {/* private routes */}
        <Route element={<Layout />}>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/schedule" element={<Scheduler />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
        {/* public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
