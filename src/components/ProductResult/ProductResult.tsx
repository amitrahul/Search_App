import React from "react";
import "./ProductResult.scss";

import { products } from "../../db/types/products";
import ProductItem from "../ProductItem/ProductItem";

interface ProductsInterface {
  products: products[];
}

const ProductsResults = ({ products }: ProductsInterface) => {
  return (
    <>
      {products.length <= 0 ? (
        <div className="no_results">No Results Found !!!</div>
      ) : (
        <div className="product_results_container">
          {products.map((product, i) => {
            return <ProductItem key={i} product={product} />;
          })}
        </div>
      )}
    </>
  );
};

export default ProductsResults;
