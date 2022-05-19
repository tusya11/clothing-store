import { CardUser } from "../../../components/CardUser/CardUser";
// import { MenuUser } from "../../../components/MenuUser/MenuUser";
import { UpdateFormForUser } from "../../../components/UpdateFormForUser/UpdateFormForUser";
import Styles from "./Profile.module.scss";

export const Profile = () => {
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
        <CardUser />
        <UpdateFormForUser />
      </div>
      {/* <MenuUser /> */}
    </div>
  );
};
