import { getLocalStorage } from "../../utils/product";
import { ADD_CART, GET_CARTS } from "./Type";

export const addCart = (product: object) => (dispatch: any) => {
  dispatch({
    type: ADD_CART,
    payload: product,
  });
};
export const getCarts = () => (dispatch: any) => {
  const products: any = getLocalStorage("ecommerce");
  dispatch({
    type: GET_CARTS,
    payload: products,
  });
};
