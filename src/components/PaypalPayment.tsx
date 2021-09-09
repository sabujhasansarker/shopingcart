import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React, { ReactElement } from "react";

function PaypalPayment(): ReactElement {
  //   const client = {
  //     sandbox:
  //       "AXMUBOcaszqCzfEOC-r--Rn7rMVoEbH9c6XbmyKb04nURqcLhpFxWwwnaUytaMR9UTaE2vwLfi5tqKbT",
  //     production: "aa",
  //   };
  return (
    <PayPalScriptProvider options={{ "client-id": "test" }}>
      <PayPalButtons style={{ layout: "horizontal" }} />
    </PayPalScriptProvider>
  );
}

export default PaypalPayment;
