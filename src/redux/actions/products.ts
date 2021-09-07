import { GET_PRODUCTS } from "./Type";

export const getProducts = () => (dispatch: any) => {
  fetch("https://fakestoreapi.com/products/1")
    .then((res) => res.json())
    .then((json) =>
      dispatch({
        type: GET_PRODUCTS,
        payload: json,
      })
    );
};
