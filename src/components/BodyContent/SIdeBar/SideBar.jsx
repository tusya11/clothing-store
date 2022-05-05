import { useState } from "react";
import HelpCenter from "../../../images/headphones.png";
import Styles from "./SideBar.module.scss";

export const SideBar = () => {
  const [items, setItems] = useState([
    {
      name: "New In",
      flag: "newin",
      id: 1,
      img: "https://w7.pngwing.com/pngs/286/240/png-transparent-world-emoji-day-emojli-whatsapp-emojipedia-emoji-smiley-thumb-signal-sticker.png",
    },
    {
      name: "Clothing",
      flag: "clothing",
      id: 2,
      img: "https://img2.freepng.ru/20180612/pgo/kisspng-dress-clothing-emojipedia-fashion-dress-boot-5b1f46ff118a19.8052253715287764470719.jpg",
    },
    {
      name: "Shoes",
      flag: "shoes",
      id: 3,
      img: "https://img2.freepng.ru/20180513/cqq/kisspng-emoji-dress-shoe-clothing-dress-boot-5af8494ab4dfd1.3300518015262211307409.jpg",
    },
    {
      name: "Accessories",
      flag: "accessories",
      id: 4,
      img: "https://w7.pngwing.com/pngs/258/264/png-transparent-emojipedia-noto-fonts-clothing-whatsapp-emoji-luggage-bags-clothing-accessories-bag.png",
    },
    {
      name: "ActiveWear",
      flag: "active",
      id: 5,
      img: "https://img2.freepng.ru/20180503/xiw/kisspng-emoji-running-sneakers-afro-runner-marathon-number-5aead4fdbe25d3.7958820515253393897789.jpg",
    },
    {
      name: "Gifts & Living",
      flag: "gifts",
      id: 6,
      img: "https://w7.pngwing.com/pngs/776/684/png-transparent-noto-fonts-emoji-gift-text-messaging-emoji-blue-angle-rectangle.png",
    },
    {
      name: "Inspiration",
      flag: "inspire",
      id: 7,
      img: "https://w7.pngwing.com/pngs/601/530/png-transparent-emoticon-computer-icons-emoji-mercedes-benz-m-class-emoji-face-face-photography-smiley.png",
    },
  ]);

  return (
    <div className={Styles.main_block}>
      <span className={Styles.text_block}>Explore</span>
      <div className={Styles.blocks}>
        {items.map(({ id, name, img }) => (
          <div key={id} className={Styles.one_block}>
            <img src={img} alt="emoji" className={Styles.image} />
            <span className={Styles.text}>{name}</span>
          </div>
        ))}
      </div>
      <div className={Styles.block_support}>
        <img src={HelpCenter} alt="hepl-center" />
        <span className={Styles.text}>Help Center</span>
      </div>
    </div>
  );
};
