const API_BASE = import.meta.env.VITE_PRODUCTS_API_URL || 'http://localhost:8082';
const PRODUCTS_URL = `${API_BASE}/api/products`;

const jsonHeaders = {
  'Content-Type': 'application/json',
};

export const getProducts = async () => {
  const res = await fetch(PRODUCTS_URL);
  if (!res.ok) throw new Error('Error al obtener productos');
  return res.json();
};

export const getProductById = async (id) => {
  const res = await fetch(`${PRODUCTS_URL}/${id}`);
  if (!res.ok) throw new Error('Producto no encontrado');
  return res.json();
};

export const addProduct = async (product) => {
  const res = await fetch(PRODUCTS_URL, {
    method: 'POST',
    headers: jsonHeaders,
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error('Error al crear producto');
  return res.json();
};

export const updateProduct = async (id, updates) => {
  const res = await fetch(`${PRODUCTS_URL}/${id}`, {
    method: 'PUT',
    headers: jsonHeaders,
    body: JSON.stringify(updates),
  });
  if (!res.ok) throw new Error('Error al actualizar producto');
  return res.json();
};

export const deleteProduct = async (id) => {
  const res = await fetch(`${PRODUCTS_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Error al eliminar producto');
  return true;
};