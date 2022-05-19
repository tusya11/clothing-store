import { useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonIcon from "@mui/icons-material/Person";
import PaymentIcon from "@mui/icons-material/Payment";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Styles from "./MenuUser.module.scss";

export const MenuUser = () => {
  const navigate = useNavigate();

  const [menuFlags, setMenuflags] = useState([
    { id: 1, title: "My Orders", flag: "orders", isVisible: true },
    { id: 2, title: "My information", flag: "information", isVisible: false },
    { id: 3, title: "Payment Method", flag: "payment", isVisible: false },
    { id: 4, title: "Settings", flag: "settings", isVisible: false },
    { id: 5, title: "Logout", flag: "logout", isVisible: false },
  ]);

  const elementIcon = (flag) => {
    if (flag === "orders") {
      return <ShoppingBasketIcon size={20} className={Styles.icon} />;
    }

    if (flag === "information") {
      return <PersonIcon size={20} className={Styles.icon} />;
    }

    if (flag === "payment") {
      return <PaymentIcon size={20} className={Styles.icon} />;
    }

    if (flag === "settings") {
      return <SettingsIcon size={20} className={Styles.icon} />;
    }

    if (flag === "logout") {
      return <LogoutIcon size={20} className={Styles.icon} />;
    }
  };

  const handleClick = (getID, flag) => {
    const array = [...menuFlags];

    const newResultArray = array?.map((element) => {
      if (element.id === getID) {
        return { ...element, isVisible: true };
      }

      return { ...element, isVisible: false };
    });

    setMenuflags(newResultArray);
    navigate(`/home/user/profile/${flag}`);
  };

  return (
    <div className={Styles.form_menu}>
      {menuFlags.map(({ id, title, flag, isVisible }) => (
        <div
          className={clsx(
            Styles.container,
            isVisible && Styles.visible_container
          )}
          key={id}
          onClick={() => handleClick(id, flag)}
        >
          <div>{elementIcon(flag)}</div>
          <span className={Styles.title}>{title}</span>
          <div className={Styles.arrow_icon}>
            <ArrowForwardIosIcon size={10} className={Styles.icon_arrow} />
          </div>
        </div>
      ))}
    </div>
  );
};
