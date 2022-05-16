import Styles from "./Auth.module.scss";

export const Auth = ({ children }) => (
  <div className={Styles.auth_content}>{children}</div>
);
