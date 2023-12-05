import clsx from "clsx";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import {
  getError,
  getProductByID,
  getProducts,
} from "../../redux/actions/indexActions";
import { isAuth } from "../../utils/isAuth";
import Styles from "./Card.module.scss";

export const Card = ({ card = {} }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { products } = useSelector(({ user }) => user || {});
  const { title, isLike, img, views, price } = card;

  const handleClickHeart = () => {
    if (isAuth()) {
      const filterArray = products.map((element) => {
        if (element.id === card.id) {
          return { ...element, isLike: !element.isLike };
        }
        return element;
      });

      dispatch(getProducts(filterArray));
    } else {
      dispatch(
        getError({
          status: "info",
          message: "You need to log in to perform this action!",
          flag: true,
        })
      );
    }
  };

  const handleClickProduct = () => {
    navigate(`${location.pathname}?id=${card?.id}`);
    dispatch(getProductByID(card));
  };

  return (
    <div className={Styles.cards}>
      <div
        className={clsx(Styles.icon, isLike && Styles.icon_isLike)}
        onClick={handleClickHeart}
      >
        <FavoriteIcon fontSize="small" className={Styles.heart} />
      </div>
      <div className={Styles.block_content} onClick={handleClickProduct}>
        <div className={Styles.img_product}>
          <img src={img} alt="card" className={Styles.img_product}></img>
        </div>
        <div className={Styles.block_text}>
          <span className={Styles.title}>{title}</span>
          <div className={Styles.icon_star}>
            <StarIcon fontSize="10px" className={Styles.icon_icon} />
            <span className={Styles.text}>({views} reviews)</span>
          </div>
          <span className={Styles.price}>$ {price}.00</span>
        </div>
      </div>
    </div>
  );
};
