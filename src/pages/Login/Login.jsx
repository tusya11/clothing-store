import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Auth } from "../../pages/Login/Auth/Auth";
import { Form } from "../../components/Form/Form";
import { SignUp } from "../../pages/Login/SignUp/SignUp";
import { validateEmail } from "../../utils/validateEmail";
import { getError } from "../../redux/actions/indexActions";
import Styles from "./Login.module.scss";

export const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);

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

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      if (user.token) {
        localStorage.setItem("token", user.token);
        navigate("/home/main");
      }
    }
  }, [user, navigate]);

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
    if (validateEmail(userName)?.input) {
      dispatch({ type: "LOGIN", payload: { email: userName, password } });
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

  const register = () => {
    const users = JSON.parse(localStorage.getItem("users"));

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
      dispatch({ type: "SIGN_UP", payload: { email: userName, password } });
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
