import { getLocalStorage } from "../../utils/product";
import { GET_WISHLISTS, WISHLISTS_FUN } from "./Type";

export const getWishlist = () => (dispatch: any) => {
  dispatch({
    type: GET_WISHLISTS,
    payload: getLocalStorage("ecomerce-wishlist"),
  });
};

export const addWishList = (value: Product) => (dispatch: any) => {
  dispatch({
    type: WISHLISTS_FUN,
    payload: value,
  });
};
