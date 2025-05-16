import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";


function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleExplore = () => {
    navigate("/explore");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const term = searchTerm.trim().toLowerCase();
    if (!term) return;

    if (term === "veg" || term === "vegetarian") {
      navigate("/veg");
    } else if (
      term === "non veg" ||
      term === "non-veg" ||
      term === "nonvegetarian" ||
      term === "non-vegetarian"
    ) {
      navigate("/nonveg");
    } else {
      navigate(`/search?q=${encodeURIComponent(term)}`);
    }
  };

  const categories = [
    {
      name: "Vegetarian",
      img: "/veg.jpg",
      path: "/veg",
      alt: "Vegetarian Dishes",
    },
    {
      name: "Non-Vegetarian",
      img: "/meat.jpg",
      path: "/nonveg",
      alt: "Meat Dishes",
    },
    {
      name: "Chocolates",
      img: "/chcol.jpg",
      path: "/search?q=chocolates",
      alt: "Chocolate Varieties",
    },
    {
      name: "Milk & Dairy",
      img: "/milkys.jpg",
      path: "/search?q=milk",
      alt: "Milk and Dairy Products",
    },
  ];

  const featuredProducts = [
    { name: "Dark Chocolate", img: "/chocolate.jpg", price: "₹99" },
    { name: "Fresh Carrots", img: "/carrots.jpg", price: "₹45" },
    { name: "Organic Chicken", img: "/organic.jpg", price: "₹180" },
    { name: "Paneer Cubes", img: "/panneercubes.jpg", price: "₹120" },
  ];

  return (
    <div className="home-container">
      {/* Search Section */}
      <section className="search-section">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            className="search-input"
            placeholder="Search for products, categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-button">
            🔍 Search
          </button>
        </form>
      </section>

      {/* Hero Banner */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>FreshBite 🍽️</h1>
            <p>Your Daily Dose of Freshness & Flavor!</p>
            <button onClick={handleExplore}>Explore Now 🛒</button>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="categories-section">
        <h2 className="section-title">Our Menu Categories</h2>
        <div className="categories-grid">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="category-card clickable"
              role="button"
              tabIndex={0}
              onClick={() => navigate(cat.path)}
              onKeyPress={(e) => {
                if (e.key === "Enter") navigate(cat.path);
              }}
            >
              <img src={cat.img} alt={cat.alt} />
              <h3>{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map((item, i) => (
            <div key={i} className="product-card">
              <img src={item.img} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <h2>Stay Updated</h2>
        <p>Get latest offers & updates straight to your inbox.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe 📬</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 FreshBite. All rights reserved.</p>
        <p>
          Made with ❤️ by{" "}
          <a href="https://yourportfolio.com" target="_blank" rel="noreferrer">
            YourName
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Home;
