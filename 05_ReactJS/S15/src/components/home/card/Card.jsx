import React from "react";
import "./Card.css";
function Card({ image, offer }) {
  return (
    <div className="card">
      <img src={image} width={"100%"} height={250} alt="" />
      <h2>{offer}</h2>
    </div>
  );
}

export default Card;
