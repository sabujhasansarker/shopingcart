import { SET_PAYMENT_DETAILS } from "./Type";

export const setPaymentDeatiles =
  (paymentDeatiles: PaymentDeatiles) => (dispatch: any) => {
    dispatch({
      type: SET_PAYMENT_DETAILS,
      payload: paymentDeatiles,
    });
  };
