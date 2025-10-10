import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductosPage from './pages/ProductosPage';
import Login from './components/Login';
import CartPage from './pages/CartPage';
import AuthProvider from './contexts/AuthContext';
import CartProvider from './contexts/CartContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<ProductosPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/carrito" element={<CartPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;