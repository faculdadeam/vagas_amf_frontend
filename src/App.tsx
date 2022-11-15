import { initConfig } from "./configs/init_configs";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  initConfig();

  return (
    <Router>
      <AppRoutes/>
    </Router>
  );
}

export default App;
