import React, { useState } from 'react';
import AppNavbar from '../components/AppNavbar';
import FiltroPorPrecio from '../components/FiltroPorPrecio';
import Productos from '../components/Productos';
import Footer from '../components/Footer';

const ProductosPage = () => {
  const [priceFilter, setPriceFilter] = useState({ min: null, max: null });

  const handleFilterChange = (filter) => {
    setPriceFilter(filter);
  };

  return (
    <>
      <AppNavbar />
      <div className="container py-5 mt-5">
        <div className="row">
          <div className="col-lg-3">
            <FiltroPorPrecio onFilterChange={handleFilterChange} />
          </div>
          <div className="col-lg-9">
            <Productos priceFilter={priceFilter} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductosPage;