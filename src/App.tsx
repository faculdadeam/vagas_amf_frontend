import { initConfig } from "./configs/init_configs";
import Home from "./pages/Home";

function App() {
  initConfig();

  return (
      <Home/>
  );
}

export default App;
