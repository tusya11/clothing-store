import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Profile } from "../../../pages/LayoutPages/Profile/Profile";
import { Box } from "../../Box/Box";
import { DisplayCardSmallBlock } from "../../DisplayCard/DisplayCardSmallBlock";
import { Card } from "../../Card/Card";
import { PayCard } from "../../PayCard/PayCard";
import { addItemsToBasket } from "../../../redux/actions/indexActions";
import { AddItemAdmin } from "../../AddItemAdmin/AddItemAdmin";
import { CreateProduct } from "../../CreateProduct/CreateProduct";
import Styles from "./MainContent.module.scss";

export const MainContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products } = useSelector(({ user }) => user || {});
  const { basket } = useSelector(({ user }) => user || {});

  const [productsState, setProductsState] = useState([]);
  const [isToken, setIsToken] = useState(false);

  useEffect(() => {
    setProductsState(products);
  }, [products]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsToken(true);
    }
  }, []);

  const getLikesProducts = (array) => {
    if (array?.length) {
      return array?.filter((element) => element.isLike);
    }
  };

  const handleAddItemsToCart = (cards) => {
    if (cards?.length) {
      const result = [...basket];
      cards.forEach((element) => {
        const findElement = result.find((value) => value.id === element.id);
        if (!findElement?.id) {
          result.push(element);
        }
      });
      dispatch(addItemsToBasket(result));
    }
  };

  const filterProductsByTag = (cards, tag) => {
    const result = [];
    cards?.forEach((element) => {
      if (element?.tag?.includes(tag)) {
        result.push(element);
      }
    });

    return result;
  };

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
        <Route
          path="/home/women"
          element={
            <Box color={"#E2C0CF"}>
              <div className={Styles.content_cards}>
                {filterProductsByTag(productsState, "women")?.length &&
                  filterProductsByTag(productsState, "women")?.map(
                    (element) => <Card key={element.id} card={element} />
                  )}
              </div>
            </Box>
          }
        />
        <Route
          path="/home/men"
          element={
            <Box color={"#7C9082"}>
              <div className={Styles.content_cards}>
                {filterProductsByTag(productsState, "men")?.length &&
                  filterProductsByTag(productsState, "men")?.map((element) => (
                    <Card key={element.id} card={element} />
                  ))}
              </div>
            </Box>
          }
        />
        <Route
          path="/home/best"
          element={
            <Box color={"#EDEEC0"}>
              <div className={Styles.content_cards}>
                {filterProductsByTag(productsState, "best")?.length &&
                  filterProductsByTag(productsState, "best")?.map((element) => (
                    <Card key={element.id} card={element} />
                  ))}
              </div>
            </Box>
          }
        />
        {/* <Route path="/home/about" element={<div>About us</div>} /> */}
        <Route
          path="/home/likes"
          element={
            <Box color={"#E0CCDD"}>
              {isToken ? (
                <>
                  {" "}
                  <DisplayCardSmallBlock
                    products={getLikesProducts(productsState)}
                  />
                  <div className={Styles.block_button}>
                    <Button
                      className={Styles.button_purchase}
                      onClick={() =>
                        handleAddItemsToCart(getLikesProducts(productsState))
                      }
                    >
                      Add items to cart
                    </Button>
                  </div>
                </>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span style={{ marginBottom: "20px" }}>
                    Необходимо авторизоваться
                  </span>
                  <Button
                    className={Styles.button_purchase}
                    onClick={() => navigate("/user/sign/signin")}
                    style={{ width: "50%", background: "orange" }}
                  >
                    Auth
                  </Button>
                </div>
              )}
            </Box>
          }
        />
        <Route
          path="/home/basket"
          element={
            <Box color={"#f7f5f5"}>
              {isToken ? (
                <>
                  <DisplayCardSmallBlock products={basket} />
                  <PayCard products={basket} />
                  <div className={Styles.block_button}>
                    <Button
                      className={Styles.button_purchase}
                      onClick={() => alert("Вы сделали заказ, поздравляю!")}
                    >
                      Go to purchase
                    </Button>
                  </div>
                </>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span style={{ marginBottom: "20px" }}>
                    Необходимо авторизоваться
                  </span>
                  <Button
                    className={Styles.button_purchase}
                    onClick={() => navigate("/user/sign/signin")}
                    style={{ width: "50%", background: "orange" }}
                  >
                    Auth
                  </Button>
                </div>
              )}
            </Box>
          }
        />
        <Route path="/home/user/profile" element={<Profile />} />
        <Route path="/home/add_new" element={<AddItemAdmin />} />
        <Route path="/home/add_new/create" element={<CreateProduct />} />
      </Routes>
    </div>
  );
};
