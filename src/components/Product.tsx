import React, { ReactElement } from "react";
import { connect } from "react-redux";
import { addCart } from "../redux/actions/cart";

interface Props {
  product: Product;
  addCart: Function;
}

function Product({ product, addCart }: Props): ReactElement {
  return (
    <div className="card">
      <div className="card-header"></div>
      <div className="card-body">
        <img src={product.image} alt="" className="w-75 d-block m-auto" />
        <p className="mt-3">{product.title}</p>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <p>
            <b>${product.price}</b>
          </p>
          <div className="d-flex">
            <div className="bg-primary me-2 cw-35 ch-35 rounded-circle d-flex align-items-center justify-content-center">
              <i className="ri-heart-line"></i>
            </div>
            <div className="bg-primary cw-35 ch-35 rounded-circle d-flex align-items-center justify-content-center">
              <i
                className="ri-shopping-bag-line"
                onClick={() => addCart(product)}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { addCart })(Product);
