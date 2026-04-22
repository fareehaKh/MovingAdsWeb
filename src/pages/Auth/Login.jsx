import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `https://localhost:44391/api/user/login/${email}/${password}`
      );

      localStorage.setItem('user', JSON.stringify(res.data));

      if (res.data.role === 'Advertiser') {
        navigate('/advertiser/home');
      } else {
        navigate('/driver/home');
      }

    } catch (error) {
      alert('Invalid email or password');
      console.log(error);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Login</h2>

        <form className="auth-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
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

          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>

        <p style={{ color: '#888', marginTop: '20px' }}>
          New here?{' '}
          <span
            onClick={() => navigate('/signup')}
            style={{ color: '#00d2ff', cursor: 'pointer' }}
          >
            Create Account
          </span>
        </p>
      </div>
    </div>
  );
}