import * as types from "./constants";
import { IInitialState } from "~/interfaces/stateRedux";
import store from "./store";
import { type } from "os";
const initialState: IInitialState = {
  cart: [],
  cartcount: 0,
  currency: "mx",
};
export default function Cars(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_CURRENCY:
      state.currency = action.currency;
      return {
        ...state,
        currency: state.currency,
      };

    case types.ADD_TO_CART:
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item._id === action.product._id
      );
      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.product, cantidad: 1 });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex],
        };
        updatedItem.cantidad++;
        updatedCart[updatedItemIndex] = updatedItem;
      }

      return {
        ...state,
        cart: updatedCart,
        cartcount: updatedCart.length,
      };
    case types.MINUS_TO_CART:
      const minusCart = [...state.cart];
      const minusItemIndex = minusCart.findIndex(
        (item) => item._id === action.product._id
      );
      const updatedItem = {
        ...minusCart[minusItemIndex],
      };
      updatedItem.cantidad--;
      if (updatedItem.cantidad <= 0) {
        minusCart.splice(minusItemIndex, 1);
      } else {
        minusCart[minusItemIndex] = updatedItem;
      }

      return {
        ...state,
        cart: minusCart,
        cartcount: minusCart.length,
      };
    case types.REMOVE_FROM_CART:
      return {
        ...state,
        cart: action.cart,
      };
    case types.EMPTY_CART:
      return {
        ...state,
        cart: [],
        cartcount: 0,
      };
    default:
      return {
        ...state,
      };
  }
}
