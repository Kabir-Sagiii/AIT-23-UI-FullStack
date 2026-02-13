import { useContext } from "react";
import "./Navbar.css";
import AuthContext from "../context-api/authContext";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div id="brand">
        <h1>
          <i class="bi bi-arrow-down-right-square-fill"></i> Dude's - Mart
        </h1>
      </div>

      <div id="menus">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/contactus">ContactUs</Link>
      </div>

      <div id="icons">
        <i class="bi bi-heart-fill"></i>
        <i class="bi bi-cart-check-fill"></i>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
