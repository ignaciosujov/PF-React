
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './components/NavBar/navBar.css'
import NavBar from './components/NavBar/navBar'
import Home from './components/home'
import Cart from './components/Cart/cart';
import './components/HomeContent/homeContent'
import HomeContent from './components/HomeContent/homeContent';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';
import CartContextProvider from './components/CartContext/cartContext';

function App() {
  const [contadorCarrito] = useState(0)



  return (
  <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/productos" element={<ItemListContainer/>} />
        <Route exact path='/productos/category/:categoryId' element={<ItemListContainer/>} />
        <Route exact path='/productos/item/:id' element={<ItemDetailContainer/>}></Route>
        <Route exact path='/cart' element={<Cart />}></Route>
        <Route exact path='/checkout' element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  </CartContextProvider>
  );
}

export default App;
