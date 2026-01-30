import React from "react";
import "./Products.css";
function Product({ image, name, description }) {
  return (
    <div className="product-card">
      <img src={image} width={"100%"} height={230} alt="" />
      <h3>{name}</h3>
      <p>{description.slice(0, 80)}</p>
      <button>Product Details</button>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
