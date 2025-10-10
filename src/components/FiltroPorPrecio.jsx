import React, { useState } from 'react';
import '../styles/filtro.css';

const FiltroPorPrecio = ({ onFilterChange }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilterApply = () => {
    onFilterChange({
      min: minPrice === '' ? null : Number(minPrice),
      max: maxPrice === '' ? null : Number(maxPrice)
    });
  };

  const handleReset = () => {
    setMinPrice('');
    setMaxPrice('');
    onFilterChange({ min: null, max: null });
  };

  return (
    <div className="card mb-4 shadow-sm border-0">
      <div className="card-header bg-dark text-white">
        <h5 className="mb-0">Filtrar por precio</h5>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="minPrice" className="form-label text-white">Precio mínimo</label>
          <input
            type="number"
            className="form-control"
            id="minPrice"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Desde"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="maxPrice" className="form-label text-white">Precio máximo</label>
          <input
            type="number"
            className="form-control"
            id="maxPrice"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Hasta"
          />
        </div>
        <div className="d-grid gap-2">
          <button 
            className="btn  btn-primary filter-button" 
            onClick={handleFilterApply}
          >
            Aplicar filtro
          </button>
          <button 
            className="btn btn-outline-secondary" 
            onClick={handleReset}
          >
            Restablecer
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiltroPorPrecio;