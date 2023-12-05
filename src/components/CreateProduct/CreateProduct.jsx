import React, { useRef, useState } from "react";
import Styles from "./CreateProduct.module.scss";
import ImageIcon from "@mui/icons-material/Image";
import { Avatar, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const CreateProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cropperRef = useRef();
  const [file, setFile] = useState(null);
  const [product, setProduct] = useState({});

  const { user } = useSelector(({ user }) => user || {});

  const apply = async (e) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onloadend = () => {
      setFile(fileReader.result);
    };
    setProduct((prev) => ({
      ...prev,
      image: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const handleCreateProduct = () => {
    dispatch({
      type: "CREATE_PRODUCT",
      payload: { product, token: user.token },
    });

    navigate("/home/add_new");
  };

  const handleChange = (field, value) => {
    setProduct((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <div className={Styles.createContainer}>
        <div className={Styles.inputs}>
          <TextField
            id="outlined-product-name-input"
            label="Product Name"
            color="secondary"
            type="text"
            value={product.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <TextField
            id="outlined-description-input"
            label="Description"
            color="secondary"
            type="text"
            multiline
            rows={4}
            maxRows={5}
            value={product.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />{" "}
          <TextField
            id="outlined-category-input"
            label="Category"
            color="secondary"
            type="text"
            value={product.category}
            onChange={(e) => handleChange("category", e.target.value)}
          />{" "}
          <TextField
            id="outlined-price-input"
            label="Price"
            type="number"
            color="secondary"
            value={product.price}
            onChange={(e) => handleChange("price", e.target.value)}
          />{" "}
        </div>
        <div className={Styles.card}>
          <div className={Styles.cropperContent}>
            <Avatar
              alt="product"
              src={product.image}
              sx={{
                width: "100%",
                height: "100%",
                cursor: "pointer",
                marginBottom: "10px",
                objectFit: "cover",
                borderRadius: 0,
              }}
              className={Styles.avatar}
            />
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
      </div>
      <div className={Styles.button}>
        <button onClick={handleCreateProduct}>Create</button>
      </div>
    </>
  );
};
