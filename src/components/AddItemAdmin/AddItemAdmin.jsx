import React from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./AddItemAdmin.module.scss";

export const itemsData = [
  {
    id: "1",
    title: "Кофта",
    description: "sdvvsdvd",
    price: 31,
    image:
      "https://avatars.mds.yandex.net/get-mpic/4465823/2a0000018a9597cc2bb26a86fde71c288e3b/600x800",
  },
  {
    id: "2",
    title: "Туфли",
    description: "sdvvsdvd",
    price: 31,
    image:
      "https://avatars.mds.yandex.net/get-mpic/11930023/img_id2563032130142395410.jpeg/600x800",
  },
  {
    id: "3",
    title: "Штаны",
    description: "sdvvsdvd",
    price: 31,
    image:
      "https://avatars.mds.yandex.net/get-mpic/5163466/img_id1008314399666202552.jpeg/600x800",
  },
];

export const AddItemAdmin = () => {
  const navigate = useNavigate();

  const handleClickAdd = () => {
    navigate("/home/add_new/create");
  };
  return (
    <div className={Styles.wrapperAdminPanel}>
      <div className={Styles.menu}>
        <h3 className={Styles.titleBlock}>All Products</h3>
        <button className={Styles.buttonAdd} onClick={handleClickAdd}>
          Add New Product
        </button>
      </div>
      <div className={Styles.items}>
        {itemsData.map((v) => (
          <div key={v.id} className={Styles.cardAddItem}>
            <div>{/* <img src={v.image} alt="photoItemsData" /> */}</div>
            <div>{v.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
