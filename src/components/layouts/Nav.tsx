import React, { ReactElement, useEffect } from "react";
import { connect } from "react-redux";
import Logo from "../../logo.png";
import { getCarts } from "../../redux/actions/cart";

interface Props {
  carts: [Product];
  getCarts: Function;
}

function Nav({ carts, getCarts }: Props): ReactElement {
  useEffect(() => {
    getCarts();
  }, []);
  return (
    <header className="header">
      <div className="container d-flex align-items-center justify-content-between">
        <img src={Logo} alt="Logo" className="cw-100" />
        <div className=" d-flex align-items-center">
          <div className="wishlist position-relative">
            <div className="count-bandg">0</div>
            <i className="ri-heart-line"></i>
          </div>
          <div className="cart ms-3 position-relative">
            <div className="count-bandg ">{carts ? carts.length : 0}</div>
            <i className="ri-shopping-bag-line"></i>
          </div>
        </div>
      </div>
    </header>
  );
}

const mapStateToProps = (state: { cart: [Product] }) => ({
  carts: state.cart,
});

export default connect(mapStateToProps, { getCarts })(Nav);
