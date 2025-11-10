import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import App from './App'
import { initProducts } from './services/productsService'

// Inicializa productos en localStorage para que el CRUD y las páginas usen la misma fuente
initProducts()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
