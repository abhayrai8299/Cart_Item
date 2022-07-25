import "./App.css";
import CartItem from "./components/cartItem";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Product from "./components/Product";
import Details from './components/detailPage';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
