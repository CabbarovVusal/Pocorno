import React from "react";
import Navbar from "./components/Header/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Explore from "./components/Pages/Explore";
import Footer from "./components/Footer/Footer";
import CreateYourOwn from "./components/Pages/CreateYourOwn";
import Shop from "./components/Pages/Shop";
import PopcornGifts from "./components/Pages/PopcornGifts";
import { CartProvider } from "./components/Context/CartContext";
import Product from "./components/Products/Product"; // Product komponentini daxil edin
import CartModal from "./components/mui/CartModal"; // CartModal komponentini daxil edin
import Home from "./components/Pages/Home";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/create-your-own" element={<CreateYourOwn />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/popcorn-gifts/" element={<PopcornGifts />} />
          <Route path="/shop/products" element={<Product />} />{" "}
        </Routes>
        <CartModal />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
