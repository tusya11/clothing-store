import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { getUser } from "../../redux/actions/indexActions";
import Styles from "./CardUser.module.scss";

export const CardUser = () => {
  const dispatch = useDispatch();

  const { user } = useSelector(({ user }) => user || {});

  const [isChange, setIsChange] = useState(false);
  // const [file, setFile] = useState(null);
  const [nameUser, setNameUser] = useState("");

  const cropperRef = useRef();

  const apply = async (e) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    // fileReader.onloadend = () => {
    //   setFile(fileReader.result);
    // };
    dispatch(getUser({ ...user, img: URL.createObjectURL(e.target.files[0]) }));
  };

  const handleDoubleClick = () => {
    setIsChange(true);
    console.log("---lol");
  };

  const handleBlur = () => {
    dispatch(getUser({ ...user, name: nameUser }));
    setIsChange(false);
  };

  return (
    <div className={Styles.card_user}>
      <div className={Styles.content_avatar}>
        <Avatar
          alt={user.name ? user.name : "Ray Paul"}
          src={user.img}
          sx={{
            width: 100,
            height: 100,
            margin: "20px",
            marginRight: "15%",
            cursor: "pointer",
            objectFit: "cover",
          }}
        />
        <div className={Styles.info_user}>
          {!isChange ? (
            <span
              className={Styles.name}
              onDoubleClick={handleDoubleClick}
              onBlur={handleBlur}
            >
              {user.name ? user.name : "NAME"}
            </span>
          ) : (
            <input
              onBlur={handleBlur}
              onChange={({ value }) => setNameUser(value)}
            />
          )}
          <span className={Styles.email}>{user.email}</span>
        </div>
      </div>
      <form>
        <label className={Styles.button_add} htmlFor="file-upload">
          Загрузить
          <ImageIcon />
        </label>
        <input
          type="file"
          onChange={apply}
          ref={cropperRef}
          className={Styles.input}
          accept="image/*"
          id="file-upload"
        />
      </form>
    </div>
  );
};
