import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login";
import UserRoute from "./UserRoute";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index path="/" element={<Login />} />

        <Route element={<UserRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;