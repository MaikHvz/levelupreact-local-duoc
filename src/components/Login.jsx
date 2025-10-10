import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/login.css';

const Login = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login, register, verifyCredentials } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    try {
      const user = verifyCredentials(email, password);
      login(user);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');
    if (!name.trim()) {
      setError('El nombre es obligatorio');
      return;
    }
    if (!email.trim()) {
      setError('El correo electronico es obligatorio');
      return;
    }
    if (!password.trim() || password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    try {
      register({ name, email, password });
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  // Al hacer click en el fondo, navegamos al index
  const handleBackgroundClick = () => {
    navigate('/');
  };

  // Para evitar que el click dentro del login cierre la ventana
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="position-relative z-0 login-container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      
      {/* Overlay transparente que cubre todo el fondo */}
      <div
        className="overlay position-fixed top-0 start-0 w-100 h-100"
        onClick={handleBackgroundClick}
        style={{ cursor: 'pointer', backgroundColor: 'transparent', zIndex: 1 }}
      ></div>

      {/* Efectos visuales de fondo */}
      <div className="bg-effects" style={{ zIndex: 0 }}>
        <div className="effect-circle effect-1"></div>
        <div className="effect-circle effect-2"></div>
        <div className="effect-circle effect-3"></div>
      </div>

      {/* Contenedor del login, captura el click para que no propague */}
      <div
        className="login-card mx-auto position-relative"
        style={{ zIndex: 2 }}
        onClick={stopPropagation}
      >
        <div className="card-header text-center">
          <div className="icon-container">
            <i className="bi bi-person"></i>
          </div>
          <h2 className="card-title">Bienvenido</h2>
          <p className="card-description">Inicia sesión o regístrate para continuar</p>
        </div>
        
        <div className="card-body p-4">
               
          {/* Tabs de login/registro */}
          <ul className="position-relative z-2 cursor-pointer nav nav-pills nav-fill custom-tabs mb-4">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'login' ? 'active' : ''}`}
                onClick={() => setActiveTab('login')}
              >
                Iniciar Sesión
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'register' ? 'active' : ''}`}
                onClick={() => setActiveTab('register')}
              >
                Registrarse
              </button>
            </li>
          </ul>
          
          
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          
          {/* Formulario de login */}
          <div className={`tab-pane ${activeTab === 'login' ? 'd-block' : 'd-none'}`}>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="loginEmail" className="form-label">Correo Electrónico</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="loginEmail" 
                    placeholder="ejemplo@correo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="loginPassword" className="form-label">Contraseña</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-lock"></i>
                  </span>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="loginPassword" 
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Iniciar Sesión <i className="bi bi-box-arrow-in-right ms-1"></i>
                </button>
              </div>
            </form>
          </div>
          
          {/* Formulario de registro */}
          <div className={`tab-pane ${activeTab === 'register' ? 'd-block' : 'd-none'}`}>
            <form onSubmit={handleRegister}>
              <div className="mb-3">
                <label htmlFor="registerName" className="form-label">Nombre</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-person"></i>
                  </span>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="registerName" 
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="mb-3">
                <label htmlFor="registerEmail" className="form-label">Correo Electrónico</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="registerEmail" 
                    placeholder="ejemplo@correo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="registerPassword" className="form-label">Contraseña</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-lock"></i>
                  </span>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="registerPassword" 
                    placeholder="Mínimo 6 caracteres"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength="6"
                  />
                </div>
              </div>
              
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Registrarse <i className="bi bi-person-plus ms-1"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
