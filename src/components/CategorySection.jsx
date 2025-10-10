import React from "react";

import "../styles/herosection.css";


export default function CategorySection() {


  return (
<div className=" category-card-main container-lg category-section" id="categoria">
  <h3 className="text-center">Explora Nuestras Categorías</h3>
  <p className="text-center p">Encuentra exactamente lo que necesitas para mejorar tu setup gaming</p>
  
  <div className="category-card-container flex-wrap container-lg d-flex justify-content-center gap-3">
    
    <div className="category-card d-flex flex-column align-items-center gap-1">
      <i className="bi bi-controller card-icon"></i>
      <div className="card-title fw-semibold">Consolas</div>
      <div className="card-description">150+ productos</div>
    </div>
    
    <div className="category-card d-flex flex-column align-items-center gap-1">
      <i className="bi bi-headset card-icon"></i>
      <div className="card-title fw-semibold">Accesorios</div>
      <div className="card-description">80+ productos</div>
    </div>
    
    <div className="category-card d-flex flex-column align-items-center gap-1">
      <i className="bi bi-pc card-icon"></i>
      <div className="card-title fw-semibold">Computadores</div>
      <div className="card-description">10+ productos</div>
    </div>
    
    <div className="category-card d-flex flex-column align-items-center gap-1">
      <i className="bi bi-person-arms-up card-icon"></i>
      <div className="card-title fw-semibold text-center">Poleras</div>
      <div className="card-description">30+ productos</div>
    </div>
    
    <div className="category-card d-flex flex-column align-items-center gap-1">
      <i className="bi bi-controller card-icon"></i>
      <div className="card-title fw-semibold">Sillas Gamer</div>
      <div className="card-description">50+ productos</div>
    </div>
    
  </div>
</div>
  );
}
