import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

export default function Signup() {
  const [type, setType] = useState('Advertiser');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        'https://localhost:44391/api/user/signup',
        {
          Name: name,
          Email: email,
          Password: password,
          role: type
        }
      );

      alert('Signup successful!');
      navigate('/login');

    } catch (error) {
      alert('Signup failed');
      console.log(error);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Register</h2>

        <div className="type-toggle">
          <button
            type="button"
            className={type === 'Advertiser' ? 'type-btn active' : 'type-btn'}
            onClick={() => setType('Advertiser')}
          >
            Advertiser
          </button>

          <button
            type="button"
            className={type === 'Driver' ? 'type-btn active' : 'type-btn'}
            onClick={() => setType('Driver')}
          >
            Driver
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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
            Sign Up
          </button>
        </form>

        <p style={{ color: '#888', marginTop: '20px' }}>
          Already have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            style={{ color: '#00d2ff', cursor: 'pointer' }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}