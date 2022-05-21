import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Button } from "@mui/material";
import { Profile } from "../../../pages/LayoutPages/Profile/Profile";
import { Box } from "../../Box/Box";
import { DisplayCardSmallBlock } from "../../DIsplayCard/DisplayCardSmallBlock";
import { PayCard } from "../../PayCard/PayCard";
import { Card } from "../../Card/Card";
import Styles from "./MainContent.module.scss";

export const MainContent = () => {
  const { products } = useSelector(({ user }) => user || {});

  const [productsState, setProductsState] = useState([]);

  useEffect(() => {
    if (products?.length > 0) {
      setProductsState(products);
    }
  }, [products]);

  return (
    <div className={Styles.content_magazine}>
      <Routes>
        <Route
          path="/home/main"
          element={
            <Box color={"#f7f5f5"}>
              <div className={Styles.content_cards}>
                {productsState?.length &&
                  productsState?.map((element) => (
                    <Card key={element.id} card={element} />
                  ))}
              </div>
            </Box>
          }
        />
        <Route path="/home/*/:id" element={<div>sc</div>} />
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
              <DisplayCardSmallBlock products={productsState} />
              <PayCard products={productsState} />
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
