import React from "react";
import './App.css';
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "./store";
import './MyStyle1.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Milk from "./Milk";
import Chocolate from "./Chocolate";
import Orders from "./Orders";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Cart from "./Cart";
import Signin from "./Signin";
import Signup from "./Signup";
import Pagenotfound from "./Pagenotfound";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const cartObject = useSelector(state => state.cart);
  const totalCartCount = cartObject.reduce((total, item) => total + item.quantity, 0);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("user");
    navigate("/signin");
  };

  return (
    <>
      <nav className="menubar">
        <Link to="/Home"><img src="/fb.jpg" alt="Logo" className="menu-logo" /></Link>
        <Link to="/Home">🏠 Home</Link>
        <Link to="/veg">🥦 Veg</Link>
        <Link to="/non-veg">🍗 Non-Veg</Link>
        <Link to="/milk">🥛 Milk</Link>
        <Link to="/chocolate">🍫 Chocolates</Link>
        <Link to="/cart">🛒 Cart ({totalCartCount})</Link>
        <Link to="/Orders">📦 Orders</Link>
        <Link to="/aboutus">🏢 About Us</Link>
        <Link to="/contactus">📞 Contact Us</Link>

        {user ? (
          <>
            <span className="welcome" style={{color:"darkblue",fontStyle:"italic"}}>👋 Welcome, {user.username}</span>
            <button className="logout-btn" onClick={handleLogout}>🚪 Logout</button>
          </>
        ) : (
          <Link to="/signin">🔐 Sign In</Link>
        )}
      </nav>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/non-veg" element={<NonVeg />} />
        <Route path="/milk" element={<Milk />} />
        <Route path="/chocolate" element={<Chocolate />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
