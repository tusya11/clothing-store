import { GET_USER, PRODUCT_BY_ID, PRODUCTS, GET_BASKET } from "../types/types";

const initialState = {
  user: {},
  product: {},
  products: [],
  basket: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload };
    case PRODUCT_BY_ID:
      return { ...state, product: action.payload };
    case PRODUCTS:
      return { ...state, products: action.payload };

    case GET_BASKET:
      return { ...state, basket: action.payload };
    default:
      return state;
  }
};
