import { combineReducers } from "redux";
import cart from "./cart";
import product from "./products";
import wishlist from "./wishlist";

export default combineReducers({ product, cart, wishlist });
