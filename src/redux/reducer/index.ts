import { combineReducers } from "redux";
import cart from "./cart";
import paymentDeatiles from "./paymentDeatiles";
import product from "./products";
import wishlist from "./wishlist";

export default combineReducers({ product, cart, wishlist, paymentDeatiles });
