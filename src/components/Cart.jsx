import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import '../styles/cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [showLoginAlert, setShowLoginAlert] = useState(false);

  // Manejar el proceso de pago
  const handleCheckout = () => {
    if (isAuthenticated) {
      // Proceder con el pago 
      alert('¡Gracias por tu compra! Tu pedido ha sido procesado.');

      clearCart();
    } else {
      // Mostrar alerta si no está autenticado
      setShowLoginAlert(true);
      // Ocultar la alerta después de 5 segundos
      setTimeout(() => {
        setShowLoginAlert(false);
      }, 5000);
    }
  };

  // Redireccionar al login
  const redirectToLogin = () => {
    navigate('/login');
  };

  if (cart.length === 0) {
    return (
      <div className="cart-container container py-5">
        <div className="text-center empty-cart">
          <i className="bi bi-cart-x display-1 text-muted mb-4"></i>
          <h2>Tu carrito está vacío</h2>
          <p className="lead">¡Agrega algunos productos para comenzar!</p>
          <Link to="/productos" className="btn btn-primary mt-3">
            Ver productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container container py-5">
      <h1 className="mb-4 text-white">Tu Carrito</h1>
      
      {/* Alerta de inicio de sesión */}
      {showLoginAlert && (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>¡Necesitas iniciar sesión!</strong> Para completar tu compra, debes iniciar sesión o registrarte.
          <button type="button" className="btn-close" onClick={() => setShowLoginAlert(false)} aria-label="Close"></button>
        </div>
      )}
      
      <div className="row">
        <div className="col-lg-8">
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item card mb-3">
                <div className="row g-0">
                  <div className="col-md-2">
                    <div className="cart-item-img-container">
                      <img 
                        src={item.image} 
                        className="cart-item-img" 
                        alt={item.name} 
                      />
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body d-flex flex-column flex-md-row justify-content-between">
                      <div>
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text text-white fw-bold">${item.price.toFixed(2)}</p>
                      </div>
                      
                      <div className="d-flex align-items-center mt-3 mt-md-0">
                        <div className="quantity-control me-3">
                          <button 
                            className="btn btn-sm btn-outline-secondary" 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <i className="bi bi-dash"></i>
                          </button>
                          <span className="mx-2 text-white">{item.quantity}</span>
                          <button 
                            className="btn btn-sm btn-outline-secondary" 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <i className="bi bi-plus"></i>
                          </button>
                        </div>
                        
                        <button 
                          className="btn btn-sm btn-outline-danger" 
                          onClick={() => removeFromCart(item.id)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="d-flex justify-content-between mt-4">
            <Link to="/productos" className="btn boton-seguir-comprando  text-white">
              <i className="bi bi-arrow-left me-2 text-whit"></i>
              Seguir comprando
            </Link>
            <button onClick={clearCart} className="btn btn-outline-danger">
              <i className="bi bi-trash me-2"></i>
              Vaciar carrito
            </button>
          </div>
        </div>
        
        <div className="col-lg-4 mt-4 mt-lg-0">
          <div className="card cart-summary bg-w">
            <div className="card-body">
              <h5 className="card-title mb-4">Resumen del pedido</h5>
              
              <div className="d-flex justify-content-between mb-2">
                <span className='text-white'> Productos ({cart.reduce((acc, item) => acc + item.quantity, 0)})</span>
                <span className='text-white'>${totalPrice.toFixed(2)}</span>
              </div>
              
              <div className="d-flex justify-content-between mb-2">
                <span className='text-white'>Envío</span>
                <span className='text-white'>Gratis</span>
              </div>
              
              <hr />
              
              <div className="d-flex justify-content-between mb-4 fw-bold">
                <span className='text-white'>Total</span>
                <span className='text-white'>${totalPrice.toFixed(2)}</span>
              </div>
              
              {isAuthenticated ? (
                <button 
                  className="btn btn-primary w-100"
                  onClick={handleCheckout}
                >
                  Proceder al pago
                  <i className="bi bi-credit-card ms-2"></i>
                </button>
              ) : (
                <div>
                  <button 
                    className="btn btn-primary w-100 mb-2"
                    onClick={redirectToLogin}
                  >
                    Iniciar sesión para continuar
                    <i className="bi bi-box-arrow-in-right ms-2"></i>
                  </button>
                  <p className="text-center text-muted small mt-2 text-white">
                    <i className="bi bi-info-circle me-1 text-white"></i>
                   <p className='text-white'>Debes iniciar sesión para guardar tu carrito y completar la compra</p> 
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;