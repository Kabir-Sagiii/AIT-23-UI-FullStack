import { useState } from "react";
import "./Products.css";
import Categories from "./Categories.jsx";
import { getProducts, getCategories } from "./Products.js";
import Product from "./Product.jsx";
function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  return (
    <div>
      <button
        id="btn"
        onClick={() => {
          getProducts(setProducts);
          getCategories(setCategories);
        }}
      >
        Get Products
      </button>
      <div id="categories">
        {categories.map((category) => {
          return (
            <Categories url={category.url} title={category.categoryName} />
          );
        })}
      </div>

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
