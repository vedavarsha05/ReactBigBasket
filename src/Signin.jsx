import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from './store';
import './Signin.css'; // Import the CSS file

function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { username, password };
    dispatch(loginUser(user));

    setSuccess(true);
    setTimeout(() => {
      navigate('/veg');
    }, 1500);
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>

      {success && <p className="success-message">✅ Sign in successful! Redirecting...</p>}

      <p>
        New user? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
}

export default Signin;
