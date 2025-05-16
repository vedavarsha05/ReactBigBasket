import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const navigate = useNavigate();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      username,
      password,
      email,
    };

    console.log('Registered user:', newUser);
    setSuccess(true);

    setTimeout(() => {
      navigate('/signin');
    }, 1500);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>

      {success && (
        <p className="success-message">✅ Signup successful! Redirecting to Sign In...</p>
      )}

      <p>
        Already registered? <a href="/signin">Sign In</a>
      </p>
    </div>
  );
}

export default Signup;
