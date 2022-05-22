import {
  GET_USER,
  GET_ERROR,
  PRODUCT_BY_ID,
  PRODUCTS,
  GET_BASKET,
  USERS,
  ADD_USER_TO_USERS,
  ADD_ITEMS_TO_BASKET,
  GET_ITEM_BASKET,
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

export function getUsers(users) {
  return {
    type: USERS,
    payload: users,
  };
}

export function addUserToUsers(user) {
  return {
    type: ADD_USER_TO_USERS,
    payload: user,
  };
}

export function addItemsToBasket(items) {
  return {
    type: ADD_ITEMS_TO_BASKET,
    payload: items,
  };
}

export function addItem(item) {
  return {
    type: GET_ITEM_BASKET,
    payload: item,
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
