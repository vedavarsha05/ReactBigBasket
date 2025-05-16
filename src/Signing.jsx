import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signingstyles.css";

function Signing() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    password: "",
    mobile: "",
    dob: "",
  });

  const [isSignUp, setIsSignUp] = useState(true); // Toggle between SignUp and SignIn
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      // SignUp Logic
      const { name, email, gender, password, mobile, dob } = formData;

      // Simple validation for SignUp
      if (!name || !email || !gender || !password || !mobile || !dob) {
        setError("Please fill in all fields.");
        return;
      }

      // Store user data (for demo purpose, store in localStorage)
      localStorage.setItem("registeredUser", JSON.stringify(formData));

      setError(""); // Clear any previous error

      // Alert the user that registration was successful
      alert("Registration successful!");

      // After successful registration, change state to show the sign-in form
      setIsSignUp(false); // Switch to the login form automatically
    } else {
      // SignIn Logic
      const { email, password } = formData;

      // Retrieve stored user data from localStorage
      const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

      // Simple validation for login
      if (!email || !password) {
        setError("Please enter both email and password.");
        return;
      }

      if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
        setError("Invalid credentials. Please try again.");
        return;
      }

      // Clear any previous errors
      setError("");
      alert("Login successful!");

      // Redirect to home page (or any other page after login)
      navigate("/"); // Redirect to home page (or any other page)
    }
  };

  return (
    <div className="signin-container">
      <h2>{isSignUp ? "Register" : "Sign In"}</h2>
      <form onSubmit={handleSubmit} className="signin-form">
        {error && <p className="error">{error}</p>}

        {isSignUp && (
          <>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter your name"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                placeholder="Enter your password"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                placeholder="Enter your mobile number"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}

        {!isSignUp && (
          <>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                placeholder="Enter your password"
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}

        <button type="submit">{isSignUp ? "Register" : "Login"}</button>
      </form>

      <p>
        {isSignUp ? (
          <>
            Already have an account?{" "}
            <span onClick={() => setIsSignUp(false)} style={{ cursor: "pointer", color: "blue" }}>
              Sign In
            </span>
          </>
        ) : (
          <>
            Don't have an account?{" "}
            <span onClick={() => setIsSignUp(true)} style={{ cursor: "pointer", color: "blue" }}>
              Register
            </span>
          </>
        )}
      </p>
    </div>
  );
}

export default Signing;
