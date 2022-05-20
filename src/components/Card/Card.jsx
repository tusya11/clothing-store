import clsx from "clsx";
import useSound from "use-sound";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import likeHeart from "../../sounds/like.mp3";
import Styles from "./Card.module.scss";

export const Card = ({ card }) => {
  const [play] = useSound(likeHeart);
  const { title, isLike, img, views, price } = card;

  const handleClickHeart = () => {
    play();
    console.log("fine");
  };

  const handleClickProduct = () => {
    console.log("---lalala");
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
