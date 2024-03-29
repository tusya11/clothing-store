import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "./pages/Layout/Layout";
import { Login } from "./pages/Login/Login";
import { User } from "./components/User/User";
import { ModalContent } from "./components/ModalContent/ModalContent";
import { AlertMessage } from "./components/Alert/Alert";
import {
  getError,
  getProductByID,
  getUser,
} from "./redux/actions/indexActions";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { user } = useSelector(({ user }) => user || {});
  const { error } = useSelector(({ error }) => error || {});
  const { product } = useSelector(({ user }) => user || {});
  const { products } = useSelector(({ user }) => user || {});

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (error?.flag) {
      setTimeout(() => dispatch(getError({})), 3000);
    }
  }, [dispatch, error.flag]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const users = JSON.parse(localStorage.getItem("users"));

    if (user?.id) {
      dispatch(getUser(user));
      localStorage.setItem("users", JSON.stringify([...users, user]));
    }
  }, [dispatch]);

  useEffect(() => {
    if (location?.search?.includes("id")) {
      setModalOpen(true);
    }
  }, [location.search]);

  useEffect(() => {
    if (location?.search?.includes("id") && products?.length > 0) {
      const ID = location.search.split("=")?.[1];
      const findElement = products.find((element) => element.id === Number(ID));
      dispatch(getProductByID(findElement));
    }
  }, [dispatch, location.search, products]);

  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS" });
    dispatch({ type: "GET_USERS" });
  }, [dispatch]);

  useEffect(() => {
    if (products?.length > 0) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  return (
    <div className="App">
      {error?.flag ? (
        <div className="error_content">
          <AlertMessage status={error.status} message={error.message} />
        </div>
      ) : null}
      {location.pathname.includes("user/sign") ? (
        <Login />
      ) : user?.id ? (
        <>
          <User user={user} />
          <Layout />
        </>
      ) : (
        <Layout />
      )}
      {modalOpen ? (
        <div className="back">
          <ModalContent product={product} setModalOpen={setModalOpen} />
        </div>
      ) : null}
    </div>
  );
};

export default App;
