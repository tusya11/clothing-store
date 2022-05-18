import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "./pages/Layout/Layout";
import { Login } from "./pages/Login/Login";
import { User } from "./components/User/User";
import { AlertMessage } from "./components/Alert/Alert";
import { getError, getUser } from "./redux/actions/indexActions";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  const { user } = useSelector(({ user }) => user || {});
  const { error } = useSelector(({ error }) => error || {});

  const navigate = useLocation();

  useEffect(() => {
    if (error?.flag) {
      setTimeout(() => dispatch(getError({})), 3000);
    }
  }, [dispatch, error.flag]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user?.id) {
      dispatch(getUser(user));
    }
  }, [dispatch]);

  return (
    <div className="App">
      {error?.flag ? (
        <div className="error_content">
          <AlertMessage status={error.status} message={error.message} />
        </div>
      ) : null}
      {navigate.pathname.includes("user/sign") ? (
        <Login />
      ) : user?.id ? (
        <>
          <User user={user} />
          <Layout />
        </>
      ) : (
        <Layout />
      )}
    </div>
  );
};

export default App;
