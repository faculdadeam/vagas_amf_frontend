import { initConfig } from "./configs/init_configs";
import AppRoutes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import Appbar from "./components/AppBar";
import SeeMore from "./components/SeeMore";

function App() {
  initConfig();

  return (
    <Router>
      <Appbar />
      <AppRoutes />
      <SeeMore />
    </Router>
  );
}

export default App;
