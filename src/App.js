import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Layout } from "./pages/Layout/Layout";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Layout />
      </div>
    </Router>
  );
};

export default App;
