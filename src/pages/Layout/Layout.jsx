import { InfoNavbar } from "../../components/Header/InfoNavbar/InfoNavbar";
import { MainContent } from "../../components/BodyContent/MainContent/MainContent";
import Styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <div className={Styles.block}>
      <div className={Styles.content}>
        <InfoNavbar />
        <MainContent />
      </div>
    </div>
  );
};
