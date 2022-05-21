import {
  GET_USER,
  GET_ERROR,
  PRODUCT_BY_ID,
  PRODUCTS,
  GET_BASKET,
} from "../types/types";

export function getUser(user) {
  return {
    type: GET_USER,
    payload: user,
  };
}

export function getProductByID(product) {
  return {
    type: PRODUCT_BY_ID,
    payload: product,
  };
}

export function getProducts(products) {
  return {
    type: PRODUCTS,
    payload: products,
  };
}

export function getBasket(baskets) {
  return {
    type: GET_BASKET,
    payload: baskets,
  };
}

export function getError(error) {
  return {
    type: GET_ERROR,
    payload: error,
  };
}
