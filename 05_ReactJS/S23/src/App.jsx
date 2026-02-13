import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Main from "./components/main/Main.jsx";
import List from "./components/Rendering-Data/List.jsx";
import Users from "./components/Rendering-Data/Users.jsx";
import Products from "./components/products/Products.jsx";
import RenderData from "./components/Rendering-Data/RenderData.jsx";
import AuthContext from "./components/context-api/authContext.js";
import Profile from "./components/profile/Profile.jsx";
import ContactUs from "./components/contact-us/ContactUs.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import ProductDetails from "./components/product-details/ProductDetails.jsx";
function App() {
  return (
    <div id="app">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/contactus"} element={<ContactUs />} />
        <Route path={"/productdetails/:id"} element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
