import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import StarIcon from "@mui/icons-material/Star";
import Styles from "./DisplayCardSmallBlock.module.scss";
import { getProductByID } from "../../redux/actions/indexActions";

export const DisplayCardSmallBlock = ({ products }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleClickProduct = (card) => {
    navigate(`${location.pathname}?id=${card?.id}`);
    dispatch(getProductByID(card));
  };

  return (
    <div className={Styles.content_cards}>
      {products?.length ? (
        products?.map((element) => (
          <div
            key={element.id}
            className={Styles.card}
            onClick={() => handleClickProduct(element)}
          >
            <div className={Styles.first_block}>
              <span className={Styles.title}> {element.title}</span>
              <div className={Styles.icon}>
                <StarIcon fontSize="10px" className={Styles.icon_icon} />
                <span className={Styles.text}>({element.views} reviews)</span>
              </div>
              <span className={Styles.price}>$ {element.price}.00</span>
            </div>
            <div className={Styles.second_block}>
              <div className={Styles.image_block}>
                <img src={element.img} alt="card" className={Styles.img}></img>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className={Styles.title}>Нет выбранных элементов</div>
      )}
    </div>
  );
};
