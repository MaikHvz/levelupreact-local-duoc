import React, { useEffect, useState } from 'react';
import AppNavbar from '../components/AppNavbar';
import Footer from '../components/Footer';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../services/productsService';

const emptyProduct = {
  name: '',
  description: '',
  image: '',
  price: 0,
  rating: 0,
  reviews: 0,
  featured: false,
};

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(emptyProduct);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const refresh = () => setProducts(getProducts());

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : (name === 'price' || name === 'rating' || name === 'reviews') ? Number(value) : value,
    }));
  };

  const startEdit = (product) => {
    setEditingId(product.id);
    setForm({
      name: product.name || '',
      description: product.description || '',
      image: product.image || '',
      price: product.price || 0,
      rating: product.rating || 0,
      reviews: product.reviews || 0,
      featured: !!product.featured,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setEditingId(null);
    setForm(emptyProduct);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!form.name.trim()) { setError('El nombre es obligatorio'); return; }
    if (!form.image.trim()) { setError('La URL de la imagen es obligatoria'); return; }
    if (form.price <= 0) { setError('El precio debe ser mayor a 0'); return; }

    try {
      if (editingId) {
        updateProduct(editingId, form);
      } else {
        addProduct(form);
      }
      refresh();
      resetForm();
    } catch (err) {
      setError('Error al guardar el producto');
    }
  };

  const handleDelete = (id) => {
    if (!confirm('¿Eliminar este producto?')) return;
    deleteProduct(id);
    refresh();
  };

  return (
    <>
      <AppNavbar />
      <div className="container py-5 mt-5">
        <h1 className="text-white mb-4">Panel de Administración</h1>
        <div className="row">
          <div className="col-lg-5">
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h5 className="card-title mb-3">{editingId ? 'Editar Producto' : 'Crear Producto'}</h5>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" name="name" className="form-control" value={form.name} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Descripción</label>
                    <textarea name="description" className="form-control" value={form.description} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">URL de Imagen</label>
                    <input type="text" name="image" className="form-control" value={form.image} onChange={handleChange} />
                    <div className="form-text">Usa imágenes de `public/` o URLs absolutas.</div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Precio</label>
                      <input type="number" name="price" className="form-control" value={form.price} onChange={handleChange} />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Rating</label>
                      <input type="number" step="0.1" name="rating" className="form-control" value={form.rating} onChange={handleChange} />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Reviews</label>
                      <input type="number" name="reviews" className="form-control" value={form.reviews} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-check form-switch mb-3">
                    <input className="form-check-input" type="checkbox" name="featured" id="featuredSwitch" checked={form.featured} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="featuredSwitch">Destacado</label>
                  </div>
                  <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-primary">{editingId ? 'Guardar Cambios' : 'Crear'}</button>
                    {editingId && <button type="button" className="btn btn-secondary" onClick={resetForm}>Cancelar</button>}
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-7 mt-4 mt-lg-0">
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h5 className="card-title mb-3">Productos</h5>
                <div className="table-responsive">
                  <table className="table table-dark table-hover align-middle">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Rating</th>
                        <th>Destacado</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map(p => (
                        <tr key={p.id}>
                          <td>{p.id}</td>
                          <td>{p.name}</td>
                          <td>${p.price}</td>
                          <td>{p.rating}</td>
                          <td>{p.featured ? 'Sí' : 'No'}</td>
                          <td className="text-end">
                            <button className="btn btn-sm btn-outline-primary me-2" onClick={() => startEdit(p)}>
                              <i className="bi bi-pencil"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(p.id)}>
                              <i className="bi bi-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                      {products.length === 0 && (
                        <tr>
                          <td colSpan={6} className="text-center text-muted">No hay productos</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminPage;