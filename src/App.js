import React from "react";
import {BrowserRouter,Routes,Route}from "react-router-dom";
import HomePage from "./pages/home";
import Cart from "./pages/cart";
import ShopPage from "./pages/shop";
import SingleProduct from "./pages/single-product";
import Checkout from "./pages/checkout";
import HeaderComponent from "./component/header";

import "./css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/font-awesome.min.css";
import "./css/style.css";
import "./css/responsive.css";

const App= () =>{
  return(
    <BrowserRouter>
    <HeaderComponent></HeaderComponent>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="shop" element={<ShopPage/>}></Route>
      <Route path="cart" element={<Cart/>}></Route>
      <Route path="single" element={<SingleProduct/>}></Route>
      <Route path="Checkout" element={<Checkout/>}></Route>





      
    </Routes>
    </BrowserRouter>
  )
}

export default App;

