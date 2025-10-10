import React from "react";
import "../styles/HeroSection.css"; // Aquí van tus estilos del hero


export default function HeroSection() {
  return (
    <main className="container-fluid d-flex justify-content-center align-items-center">
      <section className="contenedor-hero container-lg container-hero">
        <div className="hero-bg"></div>


        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
              </svg>
              ¡Nuevos productos gaming!
            </div>

            <h1 className="hero-title">
              Level Up Your <span className="gradient-text">Gaming Experience</span>
            </h1>

            <p className="hero-description">
              Descubre la mejor selección de productos gaming. Desde periféricos de alta gama hasta accesorios únicos
              que llevarán tu experiencia de juego al siguiente nivel.
            </p>

            <div className="hero-stats">
              <div className="stat">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"></polygon>
                </svg>
                <span className="text-white">4.9/5 Rating</span>
              </div>
              <span className="stat-text">+10,000 gamers satisfechos</span>
            </div>

            <div className="hero-buttons">
              <button className="btn btn-primary hero-button fw-semibold">
                Explorar Productos
              </button>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-image-container">
              <img
                src="src\assets\gaming-setup-rgb-keyboard-mouse-headset.png"
                alt="Gaming Setup"
              />
            </div>

            <div className="floating-icon floating-icon-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
              </svg>
            </div>

            <div className="floating-icon floating-icon-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"></polygon>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
