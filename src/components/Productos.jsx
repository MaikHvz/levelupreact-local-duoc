import React, { useState, useEffect } from 'react';
import productsData from '../data/productsData';
import ProductCard from './ProductCard';
import '../styles/productos.css';

const Productos = ({ priceFilter }) => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  useEffect(() => {
    let filtered = productsData;
    
    if (priceFilter) {
      if (priceFilter.min !== null) {
        filtered = filtered.filter(product => product.price >= priceFilter.min);
      }
      
      if (priceFilter.max !== null) {
        filtered = filtered.filter(product => product.price <= priceFilter.max);
      }
    }
    
    setFilteredProducts(filtered);
  }, [priceFilter]);

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-white">Nuestros Productos</h2>
      
      {filteredProducts.length === 0 ? (
        <div className="alert alert-info">
          No se encontraron productos con los filtros seleccionados.
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map(product => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Productos;