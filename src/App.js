import "./App.css";
import CartItem from "./components/cartItem";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Product from "./components/Product";
import Details from './components/detailPage';
import OrderPage from "./components/orderPage";
import { useState } from "react";
function App() {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  
  return (
    <>
      <Header products={products} searchValue={searchValue} setSearchValue={setSearchValue} 
      setProducts={setProducts}/>
      <Routes>
        <Route path="/" element={<Product products={products} />}  />
        <Route path="/cart" element={<CartItem/>} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/orderpage" element={<OrderPage  />} />
      </Routes>
    </>
  );
}

export default App;
