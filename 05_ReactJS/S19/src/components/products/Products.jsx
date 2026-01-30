import React from "react";
import "./Products.css";
import { products } from "./Products.js";
import Product from "./Product.jsx";
function Products() {
  return (
    <div>
      <div id="categories"></div>

      <div id="products-container">
        {products.map(function (product) {
          return (
            <Product
              image={product.image}
              name={product.name}
              description={product.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
