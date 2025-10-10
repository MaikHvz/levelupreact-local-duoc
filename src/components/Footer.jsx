import React from "react";

import "../styles/herosection.css";


export default function Footer() {
    


  return (
    <footer id="footer" className="footer text-light mt-5 pt-5 pb-4 mt-auto">
      <div className="container text-md-start">
        <div className="row">
          {/* Columna 1 */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
            <h5 className="text-uppercase fw-bold mb-3">LevelUp Gaming</h5>
            <p>
              Plataforma donde encuentras todos los productos gamers que
              necesitas.
            </p>
          </div>

          {/* Columna 2 */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Enlaces</h6>
            <p>
              <a href="index.html" className="text-light text-decoration-none">
                Inicio
              </a>
            </p>
            <p>
              <a
                href="productos.html"
                className="text-light text-decoration-none"
              >
                Productos
              </a>
            </p>
            <p>
              <a href="#categoria" className="text-light text-decoration-none">
                Categorías
              </a>
            </p>
            <p>
              <a
                href="contacto.html"
                className="text-light text-decoration-none"
              >
                Contacto
              </a>
            </p>
          </div>

          {/* Columna 3 */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Recursos</h6>
            <p>
              <a href="#" className="text-light text-decoration-none">
                Ayuda
              </a>
            </p>
            <p>
              <a href="#" className="text-light text-decoration-none">
                Política de Privacidad
              </a>
            </p>
            <p>
              <a href="#" className="text-light text-decoration-none">
                Términos
              </a>
            </p>
            <p>
              <a href="#" className="text-light text-decoration-none">
                Soporte
              </a>
            </p>
          </div>

          {/* Columna 4 */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Contacto</h6>
            <p>
              <i className="bi bi-house me-2"></i> Viña del mar, Chile
            </p>
            <p>
              <i className="bi bi-envelope me-2"></i> contacto@levelUpGaming.cl
            </p>
            <p>
              <i className="bi bi-phone me-2"></i> +56 9 1234 5678
            </p>
          </div>
        </div>

        {/* Íconos sociales */}
        <div className="text-center pt-3 border-top border-secondary">
          <a href="#" className="text-light me-3">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="text-light me-3">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="text-light me-3">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="text-light">
            <i className="bi bi-youtube"></i>
          </a>
        </div>

        {/* Créditos */}
        <div className="text-center mt-3">
          <p className="mb-0">
            &copy; 2025 LevelUp Gaming | Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>

  );
}
