import React from "react";
import "./Categories.css";
function Categories({ url, title }) {
  return (
    <div class="category">
      <img src={url} alt="" width="70" height="70" />
      <h3>{title}</h3>
    </div>
  );
}

export default Categories;
