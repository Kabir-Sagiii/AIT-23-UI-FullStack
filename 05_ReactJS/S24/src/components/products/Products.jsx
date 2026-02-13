import { useState, useEffect, lazy } from "react";
import "./Products.css";
import Categories from "./Categories.jsx";
import {
  getProducts,
  getCategories,
  getProductsBasedOnCategory,
} from "./Products.js";

const Product = lazy(() => import("./Product.jsx"));

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
              id={product.id}
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
