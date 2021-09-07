import { AnyAction, Reducer } from "redux";
import { updateWishlist } from "../../utils/product";
import { GET_WISHLISTS, WISHLISTS_FUN } from "../actions/Type";

type wishlistState = Array<Product>;

const initialState: wishlistState | undefined = [];

const wishlist: Reducer<any> = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case GET_WISHLISTS:
      return payload;
    case WISHLISTS_FUN:
      return updateWishlist(state, payload);
    default:
      return state;
  }
};
export default wishlist;
