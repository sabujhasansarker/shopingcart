import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { ReactElement, useState } from "react";
import { connect } from "react-redux";
import { setPaymentDeatiles } from "../redux/actions/paymentDeatiles";

interface Props {
  total: number;
  setPaymentDeatiles: Function;
}

const CheckoutForm = ({ total, setPaymentDeatiles }: Props) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const [billingDetails, setBillingDetails] = useState<PaymentDeatiles>({
    paymentId: "",
    name: "",
    phone: "",
    email: "",
  });
  const stripe = useStripe();
  const elements = useElements();
  const { name, phone, email } = billingDetails;
  const onChange = (e: any) => {
    setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
    console.log({ [e.target.name]: e.target.value });
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        console.log("[error]", error);
        setErrorMessage(error.message);
      } else {
        if (email && phone && name) {
          setErrorMessage("");
          setBillingDetails({
            ...billingDetails,
            paymentId: paymentMethod?.id,
          });
          setPaymentDeatiles(billingDetails);
        } else {
          setErrorMessage("All Filed Required***");
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="name" className="form-label mb-0">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => onChange(e)}
          className="form-control"
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="email" className="form-label mb-0">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => onChange(e)}
          className="form-control"
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="phn" className="form-label mb-0">
          Phone
        </label>
        <input
          type="text"
          id="phn"
          name="phone"
          onChange={(e) => onChange(e)}
          className="form-control"
        />
      </div>
      <div className="from-group mb-3">
        <CardElement className="form-control" />
      </div>
      {errorMessage && (
        <p className="text-danger text-center d-flex align-items-center justify-content-center">
          <i className="ri-close-circle-line me-1" /> {errorMessage}
        </p>
      )}
      <div>
        <input
          type="submit"
          value={`Pay Now $${total}`}
          disabled={!stripe}
          className="form-control bg-primary mt-3 border-0"
        />
      </div>
    </form>
  );
};

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
function BankPayment({ total, setPaymentDeatiles }: Props): ReactElement {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm total={total} setPaymentDeatiles={setPaymentDeatiles} />
    </Elements>
  );
}

export default connect(null, { setPaymentDeatiles })(BankPayment);
