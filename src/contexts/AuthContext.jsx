import React, { createContext, useState, useEffect, useContext } from 'react';

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

  // Función para iniciar sesión
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Función para registrar usuario
  const register = (userData) => {
    // Guardar usuarios en localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Verificar si el email ya existe
    const userExists = users.some(user => user.email === userData.email);
    if (userExists) {
      throw new Error('El correo electrónico ya está registrado');
    }
    
    // Agregar nuevo usuario
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Iniciar sesión con el nuevo usuario
    login(userData);
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Función para verificar credenciales
  const verifyCredentials = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(user => user.email === email && user.password === password);
    
    if (!user) {
      throw new Error('Credenciales incorrectas');
    }
    
    return user;
  };

  // Valor del contexto
  const value = {
    user,
    loading,
    login,
    register,
    logout,
    verifyCredentials,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;