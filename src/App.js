import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/checkout" element={<Checkout />} />

        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
