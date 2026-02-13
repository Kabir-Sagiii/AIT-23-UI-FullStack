import { useState, useEffect } from "react";
import "./Products.css";
import Categories from "./Categories.jsx";
import {
  getProducts,
  getCategories,
  getProductsBasedOnCategory,
} from "./Products.js";
import Product from "./Product.jsx";
function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories(setCategories);
    getProducts(setProducts);
  }, []);

  return (
    <div>
      <div id="categories">
        {categories.map((category) => {
          return (
            <Categories
              url={category.url}
              title={category.categoryName}
              setProducts={setProducts}
              getProductsBasedOnCategory={getProductsBasedOnCategory}
            />
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
