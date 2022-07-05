
import React, { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import ItemDetail from './components/ItemDetail';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Button from './components/Button';
import Carrito from './components/Carrito';
import { CartProvider } from './components/Context/CartContext'
import { Cart } from './components/Cart'

function App() {




  return (

    <Router>
      <div className="App" >
        <CartProvider>

          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/about" element={<Button />} />
            <Route exact path="/cart" element={<Carrito />} />
            <Route exact path="/category/:tipoSemilla" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            {/* <Route path="*" element={<NotFound/>}/> */}
          </Routes>
        </CartProvider>

      </div>
    </Router>
  );
}
export default App;