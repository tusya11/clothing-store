import { MainContent } from "../../BodyContent/MainContent/MainContent";
import { InfoNavbar } from "../../Header/InfoNavbar/InfoNavbar";
import Styles from "./GridSecond.module.scss";

export const GridSecond = () => (
  <div className={Styles.content}>
    <InfoNavbar />
    <MainContent />
  </div>
);
