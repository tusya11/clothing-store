import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import clsx from "clsx";
import { AiOutlineUser } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import CustomizedInputBase from "../../InputBase/InputBase";
import Styles from "./InfoNavbar.module.scss";

export const InfoNavbar = () => {
  const [items, setItems] = useState([
    { title: "Home", flag: "main", isClick: true, id: 1 },
    { title: "Women", flag: "women", isClick: false, id: 2 },
    { title: "Men", flag: "men", isClick: false, id: 3 },
    { title: "Best Seller", flag: "best", isClick: false, id: 4 },
    { title: "About us", flag: "about", isClick: false, id: 5 },
    { title: "", tag: "BiHeart", flag: "likes", isClick: false, id: 6 },
    { title: "", tag: "GrBasket", flag: "basket", isClick: false, id: 7 },
    { title: "", tag: "AiOutlineUser", flag: "user", isClick: false, id: 8 },
  ]);

  const navigate = useNavigate();
  const params = window.location.pathname;

  const getToAnotherPage = (url) => {
    if (url === "user") {
      navigate("/user");
    } else {
      navigate(`/home/${url}`);
    }

    setItems((items) =>
      items.map((element) => {
        if (element.flag === url) {
          return { ...element, isClick: true };
        }

        return { ...element, isClick: false };
      })
    );
  };

  useEffect(() => {
    if (params) {
      const array = params.split("/");
      setItems((items) =>
        items.map((element) => {
          if (element.flag === array[2]) {
            return { ...element, isClick: true };
          }

          return { ...element, isClick: false };
        })
      );
    }
  }, [params]);

  const elementIcon = (flag) => {
    if (flag === "likes") {
      return (
        <BiHeart
          size={20}
          className={Styles.icon}
          onClick={() => getToAnotherPage("likes")}
        />
      );
    }

    if (flag === "basket") {
      return (
        <BsCartCheck
          size={20}
          className={Styles.icon}
          onClick={() => getToAnotherPage("basket")}
        />
      );
    }

    if (flag === "user") {
      return (
        <AiOutlineUser
          size={20}
          className={Styles.icon}
          onClick={() => getToAnotherPage("user")}
        />
      );
    }
  };

  return (
    <div className={Styles.main_content}>
      <div className={Styles.block_search}>
        <CustomizedInputBase />
        <div className={Styles.info_cards}>
          {items.map(({ title, flag, isClick, id, tag }) => (
            <div key={id}>
              {title.length ? (
                <span
                  className={clsx(Styles.text, isClick && Styles.text_is_Click)}
                  key={id}
                  onClick={() => getToAnotherPage(flag)}
                >
                  {title}
                </span>
              ) : (
                <div
                  className={clsx(Styles.icons, isClick && Styles.icon_isClick)}
                >
                  {elementIcon(flag)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
