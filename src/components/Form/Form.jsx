import { useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { IconButton, InputBase, Paper } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import KeyIcon from "@mui/icons-material/Key";
import ImageAuth from "../../images/auth.jpg";
import ImageRegister from "../../images/register.png";
import Styles from "./Form.module.scss";

export const Form = ({
  props,
  buttonFirstText,
  buttonFirstFunc,
  buttonSecondText,
  buttonSecondFunc,
}) => {
  const { ordinaryText, mainText, tag, backgroundColor } = props;

  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const handleClickBack = () => {
    navigate("/home");
  };

  return (
    <div className={Styles.auth} style={{ background: `${backgroundColor}` }}>
      <div className={Styles.icon_back}>
        <IconButton
          type="submit"
          sx={{ p: "10px", color: "white" }}
          aria-label="back"
          onClick={handleClickBack}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
      </div>
      <div className={Styles.content_auth}>
        <img
          src={tag === "auth" ? ImageAuth : ImageRegister}
          alt="auth"
          className={Styles.image}
        />
        <span className={Styles.text}>{ordinaryText}</span>
        <span className={Styles.block_text}>{mainText}</span>
        <div className={Styles.block_input}>
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "15px",
              width: "100%",
              height: "50px",
              borderRadius: "30px",
              fontSize: "18px",
            }}
          >
            <IconButton
              type="submit"
              sx={{ p: "10px", color: "black" }}
              aria-label="person"
            >
              <PersonIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1, fontSize: "16px" }}
              placeholder="Username"
              inputProps={{ "aria-label": "username" }}
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
          </Paper>
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "15px",
              width: "100%",
              height: "50px",
              borderRadius: "30px",
              fontSize: "18px",
            }}
          >
            <IconButton
              type="submit"
              sx={{ p: "10px", color: "black" }}
              aria-label="password"
            >
              <KeyIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1, fontSize: "16px" }}
              placeholder="Password"
              inputProps={{ "aria-label": "password" }}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Paper>
          <span
            className={clsx(
              Styles.button_add,
              tag === "auth" ? Styles.auth_button : Styles.register_button
            )}
            onClick={buttonFirstFunc}
          >
            {buttonFirstText}
          </span>
          <span className={Styles.text}>
            -------------------or------------------
          </span>
          <span className={Styles.button_login} onClick={buttonSecondFunc}>
            {buttonSecondText}
          </span>
        </div>
      </div>
    </div>
  );
};
