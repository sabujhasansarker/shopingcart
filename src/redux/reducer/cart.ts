import { AnyAction, Reducer } from "redux";
import { updateCart } from "../../utils/product";
import { ADD_CART } from "../actions/Type";

type cartState = Array<Product>;

const initialState: cartState | undefined = [];

const cart: Reducer<any> = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CART:
      return updateCart(state, payload, "+");
    default:
      return state;
  }
};
export default cart;
