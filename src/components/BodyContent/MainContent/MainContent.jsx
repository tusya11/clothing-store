import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Button } from "@mui/material";
import { Profile } from "../../../pages/LayoutPages/Profile/Profile";
import { Box } from "../../Box/Box";
import { DisplayCardSmallBlock } from "../../DIsplayCard/DisplayCardSmallBlock";
import { PayCard } from "../../PayCard/PayCard";
import { Card } from "../../Card/Card";
import Styles from "./MainContent.module.scss";

export const MainContent = () => {
  const [products, setProducts] = useState([
    {
      id: 32,
      title: "Wooden Cafe Table",
      views: 1234,
      price: 234,
      img: "https://mebel-v-sibiri.ru/files/originals/stolik-kofeynyy-sr-0559-s-143542.jpg",
      isLike: true,
    },
    {
      id: 34,
      title: "Wireless Headphone",
      views: 348,
      price: 343,
      img: "https://www.hdretail.ru/upload/iblock/160/160fa37cea09204ec381995fd90d405e.jpg",
      isLike: true,
    },
    {
      id: 54,
      title: "Leather Watch",
      views: 9328,
      price: 23,
      img: "https://remobi.ru/media/img/models_small/remont-watch/nika/nika-0362-0-1-46.jpg",
      isLike: false,
    },
    {
      id: 52,
      title: "Shoes Without Heels",
      views: 45,
      price: 227,
      img: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/-51/085/182/511/222/54/100029639788b0.jpg",
      isLike: false,
    },
    {
      id: 69,
      title: "Fashionable Women's Shoes",
      views: 14356,
      price: 93,
      img: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/317/364/883/113/100/100029647525b0.jpg",
      isLike: false,
    },
    {
      id: 57,
      title: "Stirrer Mug",
      views: 590,
      price: 26,
      img: "https://ae01.alicdn.com/kf/Hee2bf11f6af1428cb6181d35433b3841i.jpg",
      isLike: false,
    },
  ]);

  return (
    <div className={Styles.content_magazine}>
      <Routes>
        <Route
          path="/home/main"
          element={
            <Box color={"#f7f5f5"}>
              <div className={Styles.content_cards}>
                {products?.length &&
                  products?.map((element) => (
                    <Card key={element.id} card={element} />
                  ))}
              </div>
            </Box>
          }
        />
        <Route path="/home/women" element={<div>WOMEN</div>} />
        <Route path="/home/men" element={<div>MEN</div>} />
        <Route path="/home/best" element={<div>BEST SELLER</div>} />
        <Route path="/home/about" element={<div>About us</div>} />
        <Route path="/home/likes" element={<div>LIKES</div>} />
        <Route path="/home/likes" element={<div>LIKES</div>} />
        <Route
          path="/home/basket"
          element={
            <Box color={"#f7f5f5"}>
              <DisplayCardSmallBlock products={products} />
              <PayCard products={products} />
              <div className={Styles.block_button}>
                <Button
                  className={Styles.button_purchase}
                  onClick={() => alert("Вы сделали заказ, поздравляю!")}
                >
                  Go to purchase
                </Button>
              </div>
            </Box>
          }
        />
        <Route path="/home/user/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};
