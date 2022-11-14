import { initConfig } from "./configs/init_configs";
import AppRoutes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import Appbar from "./components/AppBar";


function App() {
  initConfig();

  return (
    <Router>
      <Appbar />
      <AppRoutes />
    </Router>
  );
}

export default App;
