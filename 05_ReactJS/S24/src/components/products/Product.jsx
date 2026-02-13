import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";
function Product({ image, name, description, id }) {
  return (
    <div className="product-card">
      <img src={image} width={"100%"} height={230} alt="" />
      <h3>{name}</h3>
      <p>{description && description.slice(0, 80)}</p>
      <Link to={`/productdetails/${id}`}>
        <button>Product Details</button>
      </Link>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
