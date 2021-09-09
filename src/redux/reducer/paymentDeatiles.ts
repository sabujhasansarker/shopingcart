import { Reducer } from "redux";
import { SET_PAYMENT_DETAILS } from "../actions/Type";

const initialState: PaymentDeatiles | undefined = {};

const paymentDeatiles: Reducer<PaymentDeatiles> = (
  state = initialState,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PAYMENT_DETAILS:
      return payload;
    default:
      return state;
  }
};
export default paymentDeatiles;
