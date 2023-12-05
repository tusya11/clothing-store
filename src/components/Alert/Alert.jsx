import { Alert } from "@mui/material";
import Styles from "./Alert.module.scss";

export const AlertMessage = ({ status, message }) => (
  <Alert
    variant="filled"
    severity={status}
    style={{ zIndex: "999999" }}
    className={Styles.content_alert}
  >
    {message}
  </Alert>
);
