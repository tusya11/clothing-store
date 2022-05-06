import { useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import HelpCenter from "../../../images/headphones.png";
import Styles from "./SideBar.module.scss";

export const SideBar = () => {
  const [items, setItems] = useState([
    {
      name: "New",
      flag: "new",
      id: 1,
      img: "😱",
      isClick: true,
    },
    {
      name: "Clothing",
      flag: "clothing",
      id: 2,
      img: "👗",
      isClick: false,
    },
    {
      name: "Shoes",
      flag: "shoes",
      id: 3,
      img: "👟",
      isClick: false,
    },
    {
      name: "Accessories",
      flag: "accessories",
      id: 4,
      img: "💍",
      isClick: false,
    },
    {
      name: "Active Wear",
      flag: "active",
      id: 5,
      img: "🏃🏿‍♀️",
      isClick: false,
    },
    {
      name: "Gifts & Living",
      flag: "gifts",
      id: 6,
      img: "🎁",
      isClick: false,
    },
    {
      name: "Inspiration",
      flag: "inspire",
      id: 7,
      img: "💎",
      isClick: false,
    },
  ]);

  const navigate = useNavigate();

  const getToAnotherPage = (url) => {
    navigate(`?bar=${url}`);

    setItems((items) =>
      items.map((element) => {
        if (element.flag === url) {
          return { ...element, isClick: true };
        }

        return { ...element, isClick: false };
      })
    );
  };

  return (
    <div className={Styles.main_block}>
      <div className={Styles.block_categories}>
        <span className={Styles.text_block}>Explore</span>
        <div className={Styles.blocks}>
          {items.map(({ id, name, img, flag, isClick }) => (
            <div
              key={id}
              className={clsx(
                Styles.one_block,
                isClick && Styles.block_isClick
              )}
              onClick={() => getToAnotherPage(flag)}
            >
              <span className={Styles.image}>{img}</span>
              <span className={Styles.text}>{name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={Styles.block_support}>
        <img src={HelpCenter} alt="hepl-center" />
        <span className={Styles.text}>Help Center</span>
      </div>
    </div>
  );
};
