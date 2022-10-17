import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;