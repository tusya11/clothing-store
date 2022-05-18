import { useNavigate } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Styles from "./User.module.scss";

export const User = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className={Styles.content_username_tag}>
      <div
        className={Styles.user_name}
        onClick={() => navigate("/home/user/profile")}
      >
        <PersonOutlineIcon size={20} className={Styles.icon} />
        {user?.email}
      </div>
    </div>
  );
};
