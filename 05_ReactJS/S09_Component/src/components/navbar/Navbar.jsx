import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div id="brand">
        <h1>Dude's - Mart</h1>
      </div>

      <div id="menus">
        <a href="">Home</a>
        <a href="">Products</a>
        <a href="">Profile</a>
        <a href="">ContactUs</a>
      </div>

      <div id="icons">
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
