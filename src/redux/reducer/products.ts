import { Reducer } from "redux";
import { GET_PRODUCTS } from "../actions/Type";

interface productState {
  products: Array<{}>;
  product: Object;
}

export const initialState: productState = {
  products: [],
  product: {},
};

const product: Reducer<productState> = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};
export default product;
