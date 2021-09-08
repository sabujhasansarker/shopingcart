import { CardElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { ReactElement } from "react";

interface Props {
  total: number;
}
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

function BankPayment({ total }: Props): ReactElement {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="name" className="form-label mb-0">
              Name
            </label>
            <input type="text" id="name" className="form-control" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label mb-0">
              Email
            </label>
            <input type="email" id="email" className="form-control" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="phn" className="form-label mb-0">
              Phone
            </label>
            <input type="text" id="phn" className="form-control" />
          </div>
          <CardElement className="form-control" />
          <div>
            <input
              type="submit"
              value={`Pay Now $${total}`}
              className="form-control bg-primary mt-3 border-0"
            />
          </div>
        </form>
      </Elements>
    </div>
  );
}

export default BankPayment;
