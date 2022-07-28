import "./App.css";
import CartItem from "./components/cartItem";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Product from "./components/Product";
import Details from "./components/detailPage";
import OrderPage from "./components/orderPage";
import { useState } from "react";
import Admin from "./components/Admin";
import Edititem from "./components/Edititem";
function App() {
  const [products, setProducts] = useState([]);
  const [searchvalue, setsearchvalue] = useState("");
  const [Item, setItem] = useState([]);
  const [edititem, setEdititem] = useState({
    id: "",
    food_name: "",
    food_type: "",
    price: "",
    rating: "",
    quantity: "",
  });

  return (
    <>
      <Header
        products={products}
        searchvalue={searchvalue}
        setsearchvalue={setsearchvalue}
        setProducts={setProducts}
      />
      <Routes>
        <Route path="/" element={<Product products={products} />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/orderpage" element={<OrderPage />} />
        <Route
          path="/admin"
          element={
            <Admin
              Item={Item}
              setItem={setItem}
              edititem={edititem}
              setEdititem={setEdititem}
            />
          }
        />
        <Route
          path="/edit"
          element={<Edititem edititem={edititem} setEdititem={setEdititem} />}
        />
      </Routes>
    </>
  );
}

export default App;
