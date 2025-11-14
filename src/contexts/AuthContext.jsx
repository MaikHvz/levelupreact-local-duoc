import React, { createContext, useState, useEffect, useContext } from 'react';
import { login as apiLogin, register as apiRegister } from '../services/authService';

// Crear el contexto de autenticación
export const AuthContext = createContext();

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => useContext(AuthContext);

// Proveedor del contexto de autenticación
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Cargar usuario desde localStorage al iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Función para iniciar sesión contra el backend
  const login = async (email, password) => {
    const responseUser = await apiLogin(email, password);
    // No almacenamos la contraseña del backend en el estado del frontend
    const sanitizedUser = {
      id: responseUser.id,
      name: responseUser.name,
      email: responseUser.email,
      role: (responseUser.role || 'USER').toString().toLowerCase(),
    };
    setUser(sanitizedUser);
    localStorage.setItem('user', JSON.stringify(sanitizedUser));
    return sanitizedUser;
  };

  // Función para registrar usuario contra el backend
  const register = async ({ name, email, password }) => {
    const responseUser = await apiRegister(name, email, password);
    const sanitizedUser = {
      id: responseUser.id,
      name: responseUser.name,
      email: responseUser.email,
      role: (responseUser.role || 'USER').toString().toLowerCase(),
    };
    setUser(sanitizedUser);
    localStorage.setItem('user', JSON.stringify(sanitizedUser));
    return sanitizedUser;
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Ya no verificamos credenciales localmente; se realiza contra el backend

  // Valor del contexto
  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    isAdmin: !!user && (user.role || '').toLowerCase() === 'admin'
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;