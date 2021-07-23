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
  const updatedCart = [...state.cart];
  let updatedCartcount = [...state.cart];
  switch (action.type) {
    case types.CHANGE_CURRENCY:
      state.currency = action.currency;
      return {
        ...state,
        currency: state.currency,
      };

    case types.ADD_TO_CART:
      
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
        cartcount: updatedCart.length
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
      };
    default:
      return {
        ...state,
      };
  }
}
