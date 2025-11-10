import productsData from '../data/productsData';

const STORAGE_KEY = 'products';

export const initProducts = () => {
  try {
    const existing = localStorage.getItem(STORAGE_KEY);
    if (!existing) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(productsData));
    }
  } catch (_) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(productsData));
  }
};

export const getProducts = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (_) {
    return [];
  }
};

export const saveProducts = (products) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
};

export const addProduct = (product) => {
  const products = getProducts();
  const newId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
  const newProduct = { ...product, id: newId };
  const updated = [...products, newProduct];
  saveProducts(updated);
  return newProduct;
};

export const updateProduct = (id, updates) => {
  const products = getProducts();
  const updated = products.map(p => (p.id === id ? { ...p, ...updates } : p));
  saveProducts(updated);
  return updated.find(p => p.id === id);
};

export const deleteProduct = (id) => {
  const products = getProducts();
  const updated = products.filter(p => p.id !== id);
  saveProducts(updated);
};