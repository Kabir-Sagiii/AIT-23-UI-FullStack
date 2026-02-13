import "./App.css";
import { lazy } from "react";
import Navbar from "./components/navbar/Navbar.jsx";

import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home.jsx";

const ProductDetails = lazy(
  () => import("./components/product-details/ProductDetails.jsx"),
);
const Products = lazy(() => import("./components/products/Products.jsx"));
const Profile = lazy(() => import("./components/profile/Profile.jsx"));
const ContactUs = lazy(() => import("./components/contact-us/ContactUs.jsx"));

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
