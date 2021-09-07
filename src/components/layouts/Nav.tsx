import React, { ReactElement } from "react";
import Logo from "../../logo.png";

interface Props {}

export default function Nav({}: Props): ReactElement {
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
            <div className="count-bandg ">0</div>
            <i className="ri-shopping-bag-line"></i>
          </div>
        </div>
      </div>
    </header>
  );
}
