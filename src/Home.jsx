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
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

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
          <div
            className="category-card"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/veg")}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter") navigate("/veg");
            }}
          >
            <img src="/veg.jpg" alt="Vegetarian" />
            <h3>Vegetarian</h3>
          </div>
          <div
            className="category-card"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/nonveg")}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter") navigate("/nonveg");
            }}
          >
            <img src="/meat.jpg" alt="Non-Vegetarian" />
            <h3>Non-Vegetarian</h3>
          </div>
          <div className="category-card">
            <img src="/chcol.jpg" alt="Chocolates" />
            <h3>Chocolates</h3>
          </div>
          <div className="category-card">
            <img src="/milkys.jpg" alt="Milk" />
            <h3>Milk & Dairy</h3>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {[
            { name: "Dark Chocolate", img: "chocolate.jpg", price: "₹99" },
            { name: "Fresh Carrots", img: "carrots.jpg", price: "₹45" },
            { name: "Organic Chicken", img: "/organic.jpg", price: "₹180" },
            { name: "Paneer Cubes", img: "/panneercubes.jpg", price: "₹120" },
          ].map((item, i) => (
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
