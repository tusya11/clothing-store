import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { GrBasket } from "react-icons/gr";
import CustomizedInputBase from "../../InputBase/InputBase";
import ImageIcon from "../../../images/clean-clothes.png";
import Styles from "./InfoNavbar.module.scss";

export const InfoNavbar = () => {
  const navigate = useNavigate();

  const getToAnotherPage = (url) => {
    navigate(`/${url}`);
  };

  return (
    <div className={Styles.main_content}>
      <div className={Styles.block_icon}>
        <img className={Styles.image_icon} src={ImageIcon} alt="icon" />
        <span className={Styles.text}>Magazine</span>
      </div>
      <div className={Styles.block_search}>
        <CustomizedInputBase />
        <div className={Styles.info_cards}>
          <span
            className={Styles.text}
            onClick={() => getToAnotherPage("women")}
          >
            Women
          </span>
          <span className={Styles.text} onClick={() => getToAnotherPage("men")}>
            Men
          </span>
          <span
            className={Styles.text}
            onClick={() => getToAnotherPage("best")}
          >
            Best Seller
          </span>
          <span className={Styles.text} onClick={() => getToAnotherPage("new")}>
            New
          </span>
          <span
            className={Styles.text}
            onClick={() => getToAnotherPage("about")}
          >
            About us
          </span>
        </div>
        <div className={Styles.icons_user}>
          <GrBasket
            size={20}
            className={Styles.icon}
            onClick={() => getToAnotherPage("basket")}
          />
          <AiOutlineUser
            size={20}
            className={Styles.icon}
            onClick={() => getToAnotherPage("user")}
          />
        </div>
      </div>
    </div>
  );
};
