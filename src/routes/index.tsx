import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login";
import UserRoute from "./UserRoute";
import RegisterOpportunity from "../pages/RegisterOpportunity";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index path="/" element={<Login />} />
        <Route element={<UserRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/register-opportunity" element={<RegisterOpportunity />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
