import React from "react";
import "./Categories.css";
function Categories({ url, title, setProducts, getProductsBasedOnCategory }) {
  return (
    <div
      class="category"
      onClick={() => {
        getProductsBasedOnCategory(title, setProducts);
      }}
    >
      <img src={url} alt="" width="70" height="70" />
      <h3>{title}</h3>
    </div>
  );
}

export default Categories;
