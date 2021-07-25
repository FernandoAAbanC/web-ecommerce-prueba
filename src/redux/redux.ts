import * as types from "./constants";
import { IInitialState } from "~/interfaces/stateRedux";
import { ICars } from "~/interfaces/cars";
import store from "./store";
import { type } from "os";
const initialState: IInitialState = {
  cart: [],
  cartcount: 0,
  currency: "mx",
};

export default function Cars(state = initialState, action) {
  const Cart = [...state.cart];
  const searchItem = (id: string): number => {
    return Cart.findIndex((item) => item._id === id);
  };
  const updatedItem = (item: number): ICars => {
    return { ...Cart[item] };
  };
  const updatedItemIndex = searchItem(action?.item?._id);
  const updateState = updatedItem(updatedItemIndex);

  switch (action.type) {
    case types.ADD_TO_CART:
      if (updatedItemIndex < 0) {
        Cart.push({ ...action.item, cantidad: 1 });
      } else {
        updateState.cantidad++;
        Cart[updatedItemIndex] = updateState;
      }
      return {
        ...state,
        cart: Cart,
        cartcount: Cart.length,
      };

    case types.MINUS_TO_CART:
      updateState.cantidad--;
      if (updateState.cantidad <= 0) {
        Cart.splice(updatedItemIndex, 1);
      } else {
        Cart[updatedItemIndex] = updateState;
      }
      return {
        ...state,
        cart: Cart,
        cartcount: Cart.length,
      };

    case types.REMOVE_FROM_CART:
      let deleteItemIndex = searchItem(action._id);
      Cart.splice(deleteItemIndex, 1);

      return {
        ...state,
        cart: Cart,
        cartcount: Cart.length,
      };

    case types.EMPTY_CART:
      return {
        ...state,
        cart: [],
        cartcount: 0,
      };

    case types.CHANGE_MODEL:
      updateState.modeloSelect = action.newModel;
      Cart[updatedItemIndex] = updateState;
      return {
        ...state,
        cart: Cart,
        cartcount: Cart.length,
      };

    case types.CHANGE_CURRENCY:
      state.currency = action.currency;
      return {
        ...state,
        currency: state.currency,
      };

    default:
      return {
        ...state,
      };
  }
}
