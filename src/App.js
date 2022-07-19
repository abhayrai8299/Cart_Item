import './App.css';
import CartItem from './components/cartItem';
import {Routes,Route} from 'react-router-dom'
import Header from './components/Header';
function App() {
  return (
    <Routes>
    <Route  path='/' element={<Header />}/>
    <Route  path='/cart' element={<CartItem />}/>
  </Routes>
  );
}

export default App;
