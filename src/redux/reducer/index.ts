import { combineReducers } from "redux";
import cart from "./cart";
import product from "./products";

export default combineReducers({ product, cart });
