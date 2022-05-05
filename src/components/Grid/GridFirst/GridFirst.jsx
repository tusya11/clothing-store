import ImageIcon from "../../../images/clean-clothes.png";
import { SideBar } from "../../BodyContent/SIdeBar/SideBar";
import Styles from "./GridFirst.module.scss";

export const GridFirst = () => {
  return (
    <div className={Styles.content}>
      <div className={Styles.block_icon}>
        <img className={Styles.image_icon} src={ImageIcon} alt="icon" />
        <span className={Styles.text}>Magazine</span>
      </div>
      <div className={Styles.content_sidebar}>
        <SideBar />
      </div>
    </div>
  );
};
