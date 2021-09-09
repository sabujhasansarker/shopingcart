import React, { CSSProperties, FC } from "react";
import BkashButton, { IComponentConfig, SuccessFunction } from "react-bkash";

const BkashPayment: FC = () => {
  const handleSuccess: SuccessFunction = (data) => {
    console.log(data, "Payment successful");
  };

  const handleClose = () => {
    console.log("bKash popup closed");
  };

  const config: IComponentConfig = {
    amount: "100",
    bkashScriptURL: "https://sandbox.bka.sh/script.js",
    createPaymentURL: "https://YOUR-PAYMENT-BACKEND-URL/createPayment",
    executePaymentURL: "http://YOUR-PAYMENT-BACKEND-URL/executePayment",
    additionalHeaders: {
      Authorization: "Bearer YOUR_TOKEN",
    },
  };

  return (
    <BkashButton
      onSuccess={handleSuccess}
      onClose={handleClose}
      config={config}
    >
      <button style={buttonStyle}>Pay with bKash</button>
    </BkashButton>
  );
};

export default BkashPayment;

const buttonStyle: CSSProperties = {
  minWidth: "170px",
  height: "38px",
  fontSize: "0.875rem",
  fontWeight: 500,
  lineHeight: 1.5,
  color: "#fff",
  padding: "0.375rem 0.75rem",
  textTransform: "uppercase",
  backgroundColor: "#e2136e",
  border: "1px solid #e2136e",
};
