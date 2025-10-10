import React, { createContext, useState, useEffect, useContext } from 'react';

// Crear el contexto del carrito
export const CartContext = createContext();

// Hook personalizado para usar el contexto del carrito
export const useCart = () => useContext(CartContext);

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Actualizar totales cuando cambia el carrito
  useEffect(() => {
    const items = cart.reduce((total, item) => total + item.quantity, 0);
    const price = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    setTotalItems(items);
    setTotalPrice(price);
    
    // Guardar en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Agregar producto al carrito
  const addToCart = (product) => {
    setCart(prevCart => {
      // Verificar si el producto ya está en el carrito
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        // Incrementar cantidad si ya existe
        return prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // Agregar nuevo producto
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Eliminar producto del carrito
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Actualizar cantidad de un producto
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === productId 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  // Vaciar carrito
  const clearCart = () => {
    setCart([]);
  };

  // Valor del contexto
  const value = {
    cart,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;