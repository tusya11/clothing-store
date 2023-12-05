import { useState } from "react";
import { CardUser } from "../../../components/CardUser/CardUser";
// import { MenuUser } from "../../../components/MenuUser/MenuUser";
import { UpdateFormForUser } from "../../../components/UpdateFormForUser/UpdateFormForUser";
import Styles from "./Profile.module.scss";

export const Profile = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    phone: "",
  });

  return (
    <div className={Styles.profile_content}>
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardUser user={user} />
        <UpdateFormForUser user={user} setUser={setUser} />
      </div>
      {/* <MenuUser /> */}
    </div>
  );
};
