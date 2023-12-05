import {
  GET_USER,
  PRODUCT_BY_ID,
  PRODUCTS,
  GET_BASKET,
  USERS,
  ADD_ITEMS_TO_BASKET,
  GET_ITEM_BASKET,
} from "../types/types";

const initialState = {
  user: {},
  users: [],
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

    case USERS:
      return { ...state, users: [...action.payload] };

    case ADD_ITEMS_TO_BASKET:
      return { ...state, basket: action.payload };

    case GET_ITEM_BASKET:
      const findELement = state.basket.find(
        (element) => element.id === action.payload.id
      );

      if (findELement?.id) {
        return { ...state, basket: state.basket };
      } else {
        return { ...state, basket: [...state.basket, action.payload] };
      }

    case GET_BASKET:
      return { ...state, basket: action.payload };
    default:
      return state;
  }
};
