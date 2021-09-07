import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProducts } from "../redux/actions/products";

interface Props {
  getProducts: Function;
  products: Array<{}>;
}

const Products = ({ getProducts, products }: Props) => {
  console.log(products);
  useEffect(() => {
    getProducts();
  }, []);
  return <div></div>;
};
const mapStateToProps = (state: { product: { products: [] } }) => ({
  products: state.product.products,
});

const mapDispatchToProps = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
