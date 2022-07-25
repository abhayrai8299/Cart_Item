import "./App.css";
import CartItem from "./components/cartItem";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Product from "./components/Product";
import Details from './components/detailPage';
import OrderPage from "./components/orderPage";
import { useState } from "react";
function App() {
  const [price,setPrice]=useState("")
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Product/>}  />
        <Route path="/cart" element={<CartItem  price={price} setPrice={setPrice} />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/orderpage" element={<OrderPage price={price} />} />
      </Routes>
    </>
  );
}

export default App;
