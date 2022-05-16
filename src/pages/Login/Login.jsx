import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Auth } from "../../pages/Login/Auth/Auth";
import { Form } from "../../components/Form/Form";
import { SignUp } from "../../pages/Login/SignUp/SignUp";
import Styles from "./Login.module.scss";

export const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const authContent = {
    ordinaryText: "Welcome Back",
    mainText: "Please, Log In.",
    backgroundColor: "linear-gradient(to top, #f5d0a3, #e263c4)",
    tag: "auth",
  };

  const registerContent = {
    ordinaryText: "Hi there!",
    mainText: `Let's Get Started!`,
    backgroundColor: "linear-gradient(to bottom left, #9E97E2, #6243DE)",
    tag: "register",
  };

  useEffect(() => {
    if (
      location.pathname.includes("user") &&
      !location.pathname.includes("signup")
    ) {
      navigate("/user/signin");
    }
  }, [location.pathname, navigate]);

  const handleLogIn = () => {
    navigate("/user/signin");
  };

  const handleCreateAccount = () => {
    navigate("/user/signup");
  };

  const login = () => {
    console.log("Дальнейшие шаги по авторизации - запрос на бэк");
  };

  const register = () => {
    console.log("Далее регистрация - запрос на бэк");
  };

  return (
    <div className={Styles.content_sign}>
      <Routes>
        <Route
          path="/user/signin"
          element={
            <Auth>
              <Form
                props={authContent}
                buttonFirstText={"Continue >"}
                buttonFirstFunc={login}
                buttonSecondText={"Create an Account"}
                buttonSecondFunc={handleCreateAccount}
              />
            </Auth>
          }
        />
        <Route
          path="/user/signup"
          element={
            <SignUp>
              <Form
                props={registerContent}
                buttonFirstText={"Create an Account"}
                buttonFirstFunc={register}
                buttonSecondText={"Log In"}
                buttonSecondFunc={handleLogIn}
              />
            </SignUp>
          }
        />
      </Routes>
    </div>
  );
};
