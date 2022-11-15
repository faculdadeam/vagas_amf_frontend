import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import RegisterOpportunity from "../pages/RegisterOpportunity";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/register-opportunity" element={<RegisterOpportunity />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
