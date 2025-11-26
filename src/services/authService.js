const API_BASE = 'https://levelup-auth-production.up.railway.app';
const AUTH_URL = `${API_BASE}/api/auth`;

const jsonHeaders = {
  'Content-Type': 'application/json',
};

export const login = async (email, password) => {
  const res = await fetch(`${AUTH_URL}/login`, {
    method: 'POST',
    headers: jsonHeaders,
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || 'Error al iniciar sesión');
  }
  return res.json();
};

export const register = async (name, email, password) => {
  const res = await fetch(`${AUTH_URL}/register`, {
    method: 'POST',
    headers: jsonHeaders,
    body: JSON.stringify({ name, email, password, role: 'USER' }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || 'Error al registrarse');
  }
  return res.json();
};

export default { login, register };
