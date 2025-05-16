import React from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Orders.css';

function Orders() {
  const orders = useSelector(state => state.orders);
  const navigate = useNavigate();

  if (orders.length === 0) {
    return (
      <div className="empty-orders">
        <h2>No orders placed yet 🛍️</h2>
        <button className="continue-btn" onClick={() => navigate('/Cart')}>
          🛒 Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="order-list">
      <h1>🧾 Order History</h1>
      {orders.map(order => (
        <div key={order.id} className="order-card">
          <h3>Order ID: #ORD-{String(order.id).slice(-6)}</h3>
          <p>Date: {order.date}</p>
          <p>Total: ₹{parseFloat(order.total).toFixed(2)}</p>
          <h4>Items:</h4>
          <ul className="order-items-list">
            {order.items.map(item => (
              <li key={item.id} className="order-item">
                <img src={item.image} alt={item.name} className="order-item-image" width={50} />
                <div className="order-item-details">
                  <strong>{item.name}</strong> × {item.quantity}<br />
                  ₹{parseFloat(item.price).toFixed(2)} each
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Orders;
