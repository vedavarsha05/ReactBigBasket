import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Vegstyles.css";
import { Addtocart } from "./store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Veg() {
  const dispatch = useDispatch();
  const vegProducts = useSelector((state) => state.Products.Veg);

  const maxAvailablePrice = Math.max(...vegProducts.map((p) => p.price), 0);
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

  const filteredProducts = vegProducts.filter(
    (product) => product.price <= maxSliderPrice
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageClick = (number) => setCurrentPage(number);

  const productListItems = currentItems.map((product, index) => (
    <li className="card" key={index}>
      <img src={product.image} alt={product.name} />
      <div className="card-content">
        <h3>{product.name}</h3>
        <p>₹{product.price}</p>
        <button
          onClick={() => {
            dispatch(Addtocart(product));
            toast.success(`${product.name} added to cart`);
          }}
        >
          Add to Cart
        </button>
      </div>
    </li>
  ));

  return (
    <div className="container">
      <h1 style={{ color: "green" }}>
        🥕🌱The Healthiest Way to Shop Fresh Vegetables Online
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
        {productListItems.length > 0 ? (
          productListItems
        ) : (
          <p>No products under ₹{maxSliderPrice}.</p>
        )}
      </ol>

      {/* Pagination */}
      {filteredProducts.length > itemsPerPage && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
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

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default Veg;
