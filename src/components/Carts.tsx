import React, { ReactElement } from "react";
import { connect } from "react-redux";
import { removeCart } from "../redux/actions/cart";

interface Props {
  carts: [Product];
  removeCart: Function;
}

function Carts({ carts, removeCart }: Props): ReactElement {
  return (
    <div className="mt-5">
      <h1 className="text-center">
        {carts.length > 0 ? "Carts" : "No Product Found"}
      </h1>
      <div className="row">
        <div className="col-lg-6">
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
        <div className="col-lg-6"></div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: { cart: [Product] }) => ({
  carts: state.cart,
});

export default connect(mapStateToProps, { removeCart })(Carts);
