import { Alert } from "@mui/material";

export const AlertMessage = ({ status, message }) => (
  <Alert variant="filled" severity={status} style={{ zIndex: "10" }}>
    {message}
  </Alert>
);
