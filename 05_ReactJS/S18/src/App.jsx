import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Main from "./components/main/Main.jsx";
import List from "./components/Rendering-Data/List.jsx";
import Users from "./components/Rendering-Data/Users.jsx";
import Products from "./components/products/Products.jsx";
import RenderData from "./components/Rendering-Data/RenderData.jsx";
import AuthContext from "./components/context-api/authContext.js";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div id="app">
      <Products />
      {/* <Users />
      <List /> */}
    </div>
  );
}

export default App;
