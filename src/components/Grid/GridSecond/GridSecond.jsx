import { InfoNavbar } from "../../Header/InfoNavbar/InfoNavbar";
import Styles from "./GridSecond.module.scss";

export const GridSecond = () => {
  return (
    <div className={Styles.content}>
      <InfoNavbar />

      {/* <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/home" element={<Layout />} />
      <Route path="/user" element={<Login />} />
    </Routes> */}
    </div>
  );
};
