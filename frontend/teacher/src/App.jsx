import Dashboard from "./pages/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./pages/Courses";
import Scheduler from "./pages/Scheduler";
import Reviews from "./pages/Reviews";
import PrivateRoutes from "./components/Layout/PrivateRoutes";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./components/Layout/Layout";
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state)=>state.teacher.isAuthenticated);
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
        <Route path="/login" element={isAuthenticated ? <Navigate to='/' /> : <Login />} />
        <Route path="/signup" element={isAuthenticated ? <Navigate to='/' /> :<Signup />} />
      </Routes>
    </>
  );
}

export default App;
