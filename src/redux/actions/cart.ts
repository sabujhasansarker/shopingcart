import toast from "react-hot-toast";
import { getLocalStorage } from "../../utils/product";
import { ADD_CART, GET_CARTS, REMOVE_CART } from "./Type";

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

export const removeCart = (item: Product) => (dispatch: any) => {
  toast.error("Cart Item Remove");
  dispatch({
    type: REMOVE_CART,
    payload: item,
  });
};
