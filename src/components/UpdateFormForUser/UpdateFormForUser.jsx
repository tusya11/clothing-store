import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { validateEmail } from "../../utils/validateEmail";
import { getError } from "../../redux/actions/indexActions";
import Styles from "./UpdateFormForUser.module.scss";

export const UpdateFormForUser = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    phone: "",
  });

  const handleChangeInfoUser = () => {
    const checkEmail = validateEmail(user.email);

    if (checkEmail) {
      localStorage.setItem("info", JSON.stringify(user));
      dispatch(
        getError({
          status: "success",
          message: "Information added!",
          flag: true,
        })
      );
    }
  };

  useEffect(() => {
    const user_info = JSON.parse(localStorage.getItem("info"));

    if (Object.keys(user_info).length !== 0) {
      setUser(user_info);
    }
  }, []);

  return (
    <div className={Styles.container}>
      <div className={Styles.update_content}>
        <span className={Styles.main_title}>User Information</span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <TextField
            id="standard-basic"
            label="First name"
            variant="standard"
            value={user.firstName}
            onChange={(e) =>
              setUser((prev) => {
                return { ...prev, firstName: e.target.value };
              })
            }
            style={{ width: "40%" }}
          />
          <TextField
            id="standard-basic"
            label="Last name"
            variant="standard"
            value={user.lastName}
            onChange={(e) =>
              setUser((prev) => {
                return { ...prev, lastName: e.target.value };
              })
            }
            style={{ width: "40%" }}
          />
        </div>
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          value={user.email}
          onChange={(e) =>
            setUser((prev) => {
              return { ...prev, email: e.target.value };
            })
          }
          style={{ width: "87%" }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginBottom: "20px",
          }}
        >
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={user.gender}
            label="Gender"
            variant="standard"
            onChange={(e) =>
              setUser((prev) => {
                return { ...prev, gender: e.target.value };
              })
            }
            style={{ width: "40%", height: "100%", padding: "8px" }}
          >
            <MenuItem value={"male"}>male</MenuItem>
            <MenuItem value={"female"}>female</MenuItem>
            <MenuItem value={"null"}>i dont know</MenuItem>
          </Select>
          <TextField
            id="standard-basic"
            label="Phone"
            variant="standard"
            value={user.phone}
            onChange={(e) =>
              setUser((prev) => {
                return { ...prev, phone: e.target.value };
              })
            }
            style={{ width: "40%" }}
          />
        </div>
        <Button
          variant="outlined"
          style={{
            color: "rgb(71, 40, 209)",
            border: "1px solid rgb(71, 40, 209)",
          }}
          onClick={handleChangeInfoUser}
        >
          Primary
        </Button>
      </div>
    </div>
  );
};
