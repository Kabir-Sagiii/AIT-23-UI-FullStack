import React from "react";
import "./Ads.css";
import AdCategories from "./ad-categories/AdCategories";
function Ads() {
  return (
    <div className="ads">
      <AdCategories
        className={"ad-kids"}
        title={"Fun & Comfy Kids Wear"}
        description={`Bright, fun, and comfortable clothing made especially for kids. Soft fabrics, playful designs, and durable stitching ensure all-day comfort, easy movement, and long-lasting wear for school, playtime, outings, and special occasions.`}
        size={"52px"}
      />

      <AdCategories
        className={"ad-mens"}
        title={"Modern Men’s Fashion"}
        description={
          "Stylish and versatile men’s clothing featuring premium fabrics, perfect fits, and timeless designs for work, casual, and weekend wear."
        }
        size={"35px"}
      />

      <AdCategories
        className={"ad-womens"}
        title={"Elegant Women’s Styles"}
        description={
          "Chic and comfortable women’s fashion with trendy designs, flattering fits, and quality fabrics for everyday confidence and elegance."
        }
        size={"35px"}
      />
    </div>
  );
}

export default Ads;
