import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import Scheduler from "./pages/Scheduler";
import Reviews from "./pages/Reviews";
import PrivateRoutes from "./pages/PrivateRoutes";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/Slice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getuserData = async () => {
      const userData = localStorage.getItem("userData");
      if (userData) {
        const data = JSON.parse(userData);
        dispatch(setUser(data));
        console.log("hello")
      }
    };
    getuserData();
  }, []);

  return (
    <>
      <Routes>
        {/* private routes */}
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/schedule" element={<Scheduler />} />
          <Route path="/reviews" element={<Reviews />} />
        </Route>
        {/* public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
