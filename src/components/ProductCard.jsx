import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    
    // Mostrar animación de confirmación
    setTimeout(() => {
      setIsAdding(false);
    }, 500);
  };

  return (
    <div className="product-card card shadow-sm h-100 border-0">
      <div className="product-card-img-container">
        <img
          src={product.image}
          className="product-card-img"
          alt={product.name}
        />
      </div>
      <div className="card-body">
        <h5 className="product-card-title text-white">{product.name}</h5>
        {product.description && <p className="card-text text-white ">{product.description}</p>}
        <div className="product-card-rating text-white">
          {product.rating && (
            <div className="d-flex align-items-center">
              <div className="text-white me-1">
                <i className="bi bi-star-fill"></i>
              </div>
              <span>{product.rating}</span>
              {product.reviews && (
                <span className="product-card-reviews text-white ms-2">({product.reviews} reseñas)</span>
              )}
            </div>
          )}
        </div>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <div className="product-card-price">${product.price.toLocaleString()}</div>
          <button 
            className={`btn btn-sm ${isAdding ? 'btn-success' : 'btn-danger'}`}
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? (
              <>
                <i className="bi bi-check-lg me-1"></i>
                Agregado
              </>
            ) : (
              <>
                <i className="bi bi-cart-plus me-1"></i>
                Agregar
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
