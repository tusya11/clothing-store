import { Alert } from "@mui/material";

export const AlertMessage = ({ status, message }) => (
  <Alert severity={status}>{message}</Alert>
);
