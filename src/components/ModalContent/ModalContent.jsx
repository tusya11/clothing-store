import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import useSound from "use-sound";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Button } from "@mui/material";
import likeHeart from "../../sounds/like.mp3";
import { Rating } from "../Rating/Rating";
import { getProducts } from "../../redux/actions/indexActions";
import Styles from "./ModalContent.module.scss";

export const ModalContent = ({ product, setModalOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { products } = useSelector(({ user }) => user || {});

  const [play] = useSound(likeHeart);

  const handleClickHeart = () => {
    play();
    const filterArray = products?.map((element) => {
      if (element.id === product.id) {
        return { ...element, isLike: !element.isLike };
      }
      return element;
    });

    dispatch(getProducts(filterArray));
  };

  const handleClickBack = () => {
    navigate(location.pathname);
    setModalOpen(false);
  };

  const handleAddItem = () => {
    console.log("add new item");
  };

  return (
    <div className={Styles.content_modal}>
      <div className={Styles.modal}>
        <div className={Styles.header_content}>
          <div className={Styles.block_name}>
            <div className={Styles.icon} onClick={handleClickBack}>
              <ArrowBackIosNewIcon fontSize="small" />
            </div>
            <span className={Styles.text_content}>Product Detail</span>
          </div>

          <div
            className={clsx(Styles.icon, product?.isLike && Styles.icon_isLike)}
            onClick={handleClickHeart}
          >
            <FavoriteIcon fontSize="small" className={Styles.heart} />
          </div>
        </div>
        <div className={Styles.image_content}>
          <img src={product?.img} alt="product" />
        </div>
        <div className={Styles.main_info}>
          <div className={Styles.block_first}>
            <span className={Styles.title}>{product?.title}</span>
            <Rating rating={product?.rating} />
          </div>
          <div className={Styles.block_second}>
            <span className={Styles.price}>$ {product?.price?.toFixed(2)}</span>
          </div>
        </div>
        <div className={Styles.info}>
          <span className={Styles.title_block}>About</span>
          <span className={Styles.description}>{product?.description}</span>
        </div>
        <Button className={Styles.button_purchase} onClick={handleAddItem}>
          Add an item to the cart
        </Button>
      </div>
    </div>
  );
};
