import { ADD_CART } from "./Type";

export const addCart = (product: object) => (dispatch: any) => {
  dispatch({
    type: ADD_CART,
    payload: product,
  });
};
