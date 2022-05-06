import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Styles from "./Login.module.scss";

export const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (location.pathname.includes("user")) {
  //     navigate("/user/login");
  //   }
  // }, [location, navigate]);

  return <div className={Styles.content_login}>FINE</div>;
};
