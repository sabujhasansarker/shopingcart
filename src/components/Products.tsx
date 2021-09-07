import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProducts } from "../redux/actions/products";
import Product from "./Product";

interface Props {
  getProducts: Function;
  products: Array<Product>;
}

const Products = ({ getProducts, products }: Props) => {
  useEffect(() => {
    const Isotope = require("masonry-layout");
    setTimeout(() => {
      new Isotope(".product-masonry", {
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
      });
    }, 3000);
    getProducts();
  }, []);
  return (
    <div className="row mt-5 product-masonry">
      {products &&
        products.map((product, i) => (
          <div className="col-md-3 grid-item" key={i}>
            <Product product={product} />
          </div>
        ))}
    </div>
  );
};
const mapStateToProps = (state: { product: { products: [] } }) => ({
  products: state.product.products,
});

const mapDispatchToProps = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
