import StarIcon from "@mui/icons-material/Star";
import Styles from "./DisplayCardSmallBlock.module.scss";

export const DisplayCardSmallBlock = ({ products }) => {
  return (
    <div className={Styles.content_cards}>
      {products.map((element) => (
        <div key={element.id} className={Styles.card}>
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
      ))}
    </div>
  );
};
