import React, { ReactElement, useEffect } from "react";
import { connect } from "react-redux";
import Logo from "../../logo.png";
import { getCarts } from "../../redux/actions/cart";
import { getWishlist } from "../../redux/actions/wishlist";

interface Props {
  carts: [Product];
  wishlist: [Product];
  getCarts: Function;
  getWishlist: Function;
}

function Nav({ carts, getCarts, wishlist, getWishlist }: Props): ReactElement {
  useEffect(() => {
    getCarts();
    getWishlist();
  }, []);
  return (
    <header className="header">
      <div className="container d-flex align-items-center justify-content-between">
        <img src={Logo} alt="Logo" className="cw-100" />
        <div className=" d-flex align-items-center">
          <div className="wishlist position-relative">
            <div className="count-bandg">{wishlist.length}</div>
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

const mapStateToProps = (state: { cart: [Product]; wishlist: [Product] }) => ({
  carts: state.cart,
  wishlist: state.wishlist,
});

export default connect(mapStateToProps, { getCarts, getWishlist })(Nav);
