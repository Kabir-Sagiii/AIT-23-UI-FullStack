import "./Navbar.css";
function Navbar({ logout }) {
  return (
    <div className="navbar">
      <div id="brand">
        <h1>
          <i class="bi bi-arrow-down-right-square-fill"></i> Dude's - Mart
        </h1>
      </div>

      <div id="menus">
        <a href="">Home</a>
        <a href="">Products</a>
        <a href="">Profile</a>
        <a href="">ContactUs</a>
      </div>

      <div id="icons">
        <i class="bi bi-heart-fill"></i>
        <i class="bi bi-cart-check-fill"></i>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
