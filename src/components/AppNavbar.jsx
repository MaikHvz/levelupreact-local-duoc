import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar-styles.css";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";

export default function AppNavbar() {
  const { user, logout, isAuthenticated } = useAuth();
  const { totalItems } = useCart();

  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-75 fixed-top custom-bottom-border">
      <div className="container-lg">
        <Link className="navbar-brand me-auto logo fw-bold" to="/">
          <span className="logo-icon">LU</span>Level Up Game
        </Link>

        <div
          className="offcanvas offcanvas-end bg-dark text-white"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <span className="logo-icon">LU</span>Level Up Game
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link text-white active" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/productos">
                  Productos
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to="/contacto">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="icons d-flex align-items-center">
          <Link to="/carrito" className="ms-5 position-relative">
            <i className="icon bi text-white bi-cart fs-6"></i>
            {totalItems > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalItems}
              </span>
            )}
          </Link>
          
          {isAuthenticated ? (
            <div className="dropdown ms-5">
              <button 
                className="btn btn-link p-0 text-decoration-none dropdown-toggle text-white" 
                type="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                <i className="icon bi text-white bi-person-check fs-5 me-1"></i>
                <span className="d-none d-md-inline small">{user.name}</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end bg-dark">
                <li><Link className="dropdown-item text-white" to="/perfil">Mi Perfil</Link></li>
                <li><hr className="dropdown-divider bg-secondary" /></li>
                <li><button className="dropdown-item text-white" onClick={logout}>Cerrar Sesión</button></li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="ms-5">
              <i className="icon bi text-white bi-person fs-5"></i>
            </Link>
          )}
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}
