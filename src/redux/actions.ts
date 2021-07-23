import * as types from "./constants";
import { Tcurrency } from "~/interfaces/stateRedux";
import { ICars } from "~/interfaces/cars";
import store from "./store";
export function addToCart(product: ICars) {
 
  return {
    type: types.ADD_TO_CART,
    product,
  };
};
export function removeFromCart(_id: string) {
  let cart = store.getState().cart;
  cart = cart.filter(item => item._id !== _id);
  return {
    type: types.REMOVE_FROM_CART,
    cart,
  };
};
export function emptyCart() {
  return {
    type: types.EMPTY_CART
   
  };
};
export function changeCurrency(currency: string) {
  return {
    type: types.CHANGE_CURRENCY,
    currency,
  };
};
