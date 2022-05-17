import { useLocation } from "react-router-dom";
import { Layout } from "./pages/Layout/Layout";
import { Login } from "./pages/Login/Login";
import "./App.css";

const App = () => {
  const navigate = useLocation();

  return (
    <div className="App">
      {navigate.pathname.includes("user/sign") ? <Login /> : <Layout />}
    </div>
  );
};

export default App;
