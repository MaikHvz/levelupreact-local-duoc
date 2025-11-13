import React, { useEffect, useState } from "react";
import "../styles/herosection.css";
import { Link } from "react-router-dom";
import { getProducts } from "../services/productsService";
import { useCart } from "../contexts/CartContext";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const { addToCart } = useCart();
  const [addingMap, setAddingMap] = useState({});

  useEffect(() => {
    const load = async () => {
      try {
        const all = await getProducts();
        setFeaturedProducts(all.filter(p => p.featured));
      } catch (_) {
        setFeaturedProducts([]);
      }
    };
    load();
  }, []);

  return (
    <section className="d-flex container-fluid flex-column justify-content-center text-center mt-5">
      <h6 className="products-title">Productos Destacados</h6>
      <p className="products-description">
        Los productos más populares entre nuestra comunidad gamer
      </p>

      <div className="container-lg container-featured-products mt-5 d-flex flex-wrap justify-content-center gap-5  ">
        {featuredProducts.map((product) => (
          <div
            key={product.id} className="product-category-card d-flex flex-column justify-content-center" >
            <div className="product-img">
              <img
                src={product.image}
                className="product-img"
                alt={product.name}
              />
            </div>
            <p className="fw-semibold">{product.name}</p>
            <span className="fw-semibold">
              <i className="bi bi-star-fill"></i> {product.rating}{" "}
              <span className="fw-normal">({product.reviews} reviews)</span>
            </span>
            <p className="fw-bold text-danger">${product.price}</p>
            <button
              className={`btn ${addingMap[product.id] ? "btn-success" : "btn-danger"} fw-bold card-button`}
              onClick={() => {
                setAddingMap(prev => ({ ...prev, [product.id]: true }));
                addToCart(product);
                setTimeout(() => {
                  setAddingMap(prev => ({ ...prev, [product.id]: false }));
                }, 500);
              }}
              disabled={!!addingMap[product.id]}
            >
              {addingMap[product.id] ? (
                <>
                  <i className="bi bi-check-lg me-2"></i>
                  Agregado
                </>
              ) : (
                <>
                  <i className="bi bi-cart-plus me-2"></i>
                  Agregar
                </>
              )}
            </button>

          </div>
        ))}


      </div>
        <button className="products-button mb-5 mt-4 align-self-center">
          <Link to="/productos"  >Ver todos los Productos</Link>
        </button>
    </section>
  );
};

export default FeaturedProducts;
