import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ChocolateStyles.css";
import { Addtocart } from "./store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Chocolate() {
  const dispatch = useDispatch();
  const chocolateProducts = useSelector((state) => state.Products.Chocolate);

  // Get maximum price dynamically
  const maxAvailablePrice = Math.max(...chocolateProducts.map((p) => p.price), 0);
  const [maxSliderPrice, setMaxSliderPrice] = useState(maxAvailablePrice);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handleSliderChange = (e) => {
    setMaxSliderPrice(Number(e.target.value));
    setCurrentPage(1);
  };

  const clearFilter = () => {
    setMaxSliderPrice(maxAvailablePrice);
    setCurrentPage(1);
  };

  const filteredProducts = chocolateProducts.filter(
    (product) => product.price <= maxSliderPrice
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAddToCart = (product) => {
    dispatch(Addtocart(product));
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="container">
      <h1 style={{ color: "chocolate" }}>
        🍫✨Celebrate life's best moments with the finest chocolates.
      </h1>

      {/* Price Slider Filter */}
      <div className="filters">
        <div className="price-slider">
          <label htmlFor="priceRange">Max Price: ₹{maxSliderPrice}</label>
          <input
            type="range"
            id="priceRange"
            min="0"
            max={maxAvailablePrice}
            value={maxSliderPrice}
            onChange={handleSliderChange}
          />
        </div>

        {maxSliderPrice < maxAvailablePrice && (
          <button className="clear-filters" onClick={clearFilter}>
            Clear Filter
          </button>
        )}
      </div>

      {/* Product List */}
      <ol className="card-grid">
        {currentItems.length > 0 ? (
          currentItems.map((product, index) => (
            <li className="card chocolate-card" key={index}>
              <img src={product.image} alt={product.name} />
              <div className="card-content">
                <h4>{product.name}</h4>
                <p>₹{product.price}</p>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            </li>
          ))
        ) : (
          <p>No chocolates under ₹{maxSliderPrice}.</p>
        )}
      </ol>

      {/* Pagination Controls */}
      {filteredProducts.length > itemsPerPage && (
        <div className="pagination">
          <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageClick(number)}
              className={currentPage === number ? "active" : ""}
            >
              {number}
            </button>
          ))}
          <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default Chocolate;
