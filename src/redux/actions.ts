import * as types from "./constants";

import { ICars } from "~/interfaces/cars";

export function addToCart(item: ICars) {
  return {
    type: types.ADD_TO_CART,
    item,
  };
}

export function minusToCart(item: ICars) {
  return {
    type: types.MINUS_TO_CART,
    item,
  };
}

export function removeFromCart(_id: string) {
  return {
    type: types.REMOVE_FROM_CART,
    _id,
  };
}

export function emptyCart() {
  return {
    type: types.EMPTY_CART,
  };
}

export function changeModel(item: ICars, newModel: string) {
  return {
    type: types.CHANGE_MODEL,
    item,
    newModel,
  };
}

export function changeCurrency(currency: string) {
  return {
    type: types.CHANGE_CURRENCY,
    currency,
  };
}
