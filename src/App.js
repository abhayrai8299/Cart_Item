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
import { useSelector } from "react-redux";
function App() {
  const prods= useSelector((state) => state.cartreducer.productList);
  const [searchvalue, setsearchvalue] = useState("");
  const [productItem,setProductItem]=useState(prods)
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
        searchvalue={searchvalue}
        setsearchvalue={setsearchvalue}
        setProductItem={setProductItem}

      />
      <Routes>
        <Route path="/" element={<Product productItem={productItem}  />} />
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
