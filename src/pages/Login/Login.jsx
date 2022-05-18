import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Auth } from "../../pages/Login/Auth/Auth";
import { Form } from "../../components/Form/Form";
import { SignUp } from "../../pages/Login/SignUp/SignUp";
import { validateEmail } from "../../utils/validateEmail";
import { generateID } from "../../utils/generateID";
import { getError, getUser } from "../../redux/actions/indexActions";
import Styles from "./Login.module.scss";

export const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

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
      !location.pathname.includes("signup") &&
      !location.pathname.includes("profile")
    ) {
      navigate("/user/sign/signin");
    }
  }, [location.pathname, navigate]);

  const handleLogIn = () => {
    setPassword("");
    setUserName("");
    navigate("/user/sign/signin");
  };

  const handleCreateAccount = () => {
    setPassword("");
    setUserName("");
    navigate("/user/sign/signup");
  };

  const login = () => {
    console.log("Дальнейшие шаги по авторизации - запрос на бэк");
  };

  const register = () => {
    if (!password) {
      dispatch(
        getError({
          status: "info",
          message: "An empty password! Please enter the password.",
          flag: true,
        })
      );
    }

    if (validateEmail(userName)?.input) {
      dispatch(
        getUser({
          id: generateID(101, 32023),
          email: userName,
          password: password,
        })
      );
      navigate("/home");
      localStorage.setItem("token", generateID(101, 32023));
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: generateID(101, 32023),
          email: userName,
          password: password,
        })
      );
    } else {
      dispatch(
        getError({
          status: "error",
          message: "Incorrect email! Please re-enter",
          flag: true,
        })
      );
    }
  };

  return (
    <div className={Styles.content_sign}>
      <Routes>
        <Route
          path="/user/sign/signin"
          element={
            <Auth>
              <Form
                password={password}
                userName={userName}
                setPassword={setPassword}
                setUserName={setUserName}
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
          path="/user/sign/signup"
          element={
            <SignUp>
              <Form
                password={password}
                userName={userName}
                setPassword={setPassword}
                setUserName={setUserName}
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
