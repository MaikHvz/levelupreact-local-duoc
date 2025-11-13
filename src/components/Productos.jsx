import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/productsService';
import ProductCard from './ProductCard';
import '../styles/productos.css';

const Productos = ({ priceFilter }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const products = await getProducts();
        setAllProducts(products);
      } catch (_) {
        setAllProducts([]);
      }
    };
    load();
  }, []);

  useEffect(() => {
    let filtered = allProducts;
    if (priceFilter) {
      if (priceFilter.min !== null) {
        filtered = filtered.filter(product => product.price >= priceFilter.min);
      }
      if (priceFilter.max !== null) {
        filtered = filtered.filter(product => product.price <= priceFilter.max);
      }
    }
    setFilteredProducts(filtered);
  }, [priceFilter, allProducts]);

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