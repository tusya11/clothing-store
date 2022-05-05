import { GridFirst } from "../../components/Grid/GridFirst/GridFirst";
import { GridSecond } from "../../components/Grid/GridSecond/GridSecond";
import Styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <div className={Styles.block}>
      <div className={Styles.content}>
        <GridFirst />
        <GridSecond />
      </div>
    </div>
  );
};
