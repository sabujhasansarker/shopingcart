import React, { ReactElement, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { connect } from "react-redux";
import { getCarts, removeCart } from "../redux/actions/cart";
import { totalPrice } from "../utils/product";
import BankPayment from "./BankPayment";

interface Props {
  carts: [Product];
  removeCart: Function;
  getCarts: Function;
}

function Carts({ carts, removeCart, getCarts }: Props): ReactElement {
  useEffect(() => {
    getCarts();
  }, []);
  let total = totalPrice(carts);

  return (
    <div className="mt-5">
      <h1 className="text-center">
        {carts.length > 0 ? "Carts" : "No Product Found"}
      </h1>
      <div className="row">
        <div className="col-lg-7">
          <div className="card">
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ width: "100px" }}>Image</th>
                    <th style={{ width: "150px" }} className="mx-2">
                      Name
                    </th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {carts &&
                  carts.map((cart, i) => (
                    <tr key={i}>
                      <td width="100">
                        <img src={cart.image} alt="" className="w-100" />
                      </td>
                      <td width="150" className="mx-2">
                        {cart.title}
                      </td>
                      <td>
                        <b>{cart.price}</b>
                      </td>
                      <td>{cart.qty}</td>
                      <td>
                        <b>{cart.totalPrice}</b>
                      </td>
                      <td>
                        <i
                          onClick={() => removeCart(cart)}
                          className="ri-close-line c-pointer"
                        ></i>
                      </td>
                    </tr>
                  ))}
              </table>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card">
            <div className="card-body">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Bank Payment with stripe</Accordion.Header>
                  <Accordion.Body>
                    <BankPayment total={total} />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Paypal Payment</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>Bkash Payment</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: { cart: [Product] }) => ({
  carts: state.cart,
});

export default connect(mapStateToProps, { removeCart, getCarts })(Carts);
