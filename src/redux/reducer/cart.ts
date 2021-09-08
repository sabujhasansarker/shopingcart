import { AnyAction, Reducer } from "redux";
import { updateCart } from "../../utils/product";
import { ADD_CART, GET_CARTS, REMOVE_CART } from "../actions/Type";

type cartState = Array<Product>;

const initialState: cartState | undefined = [];

const cart: Reducer<any> = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CARTS:
      return payload;
    case ADD_CART:
      return updateCart(state, payload, "+");
    case REMOVE_CART:
      let filterData: [] = state.filter(
        (item: Product) => item.id !== payload.id
      );
      localStorage.setItem("ecommerce", JSON.stringify(filterData));
      return filterData;
    default:
      return state;
  }
};
export default cart;
