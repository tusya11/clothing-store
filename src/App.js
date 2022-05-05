import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./pages/Layout/Layout";
import "./App.css";

const App = () => (
  <Router>
    <div className="App">
      <Layout />
    </div>
  </Router>
);

export default App;
