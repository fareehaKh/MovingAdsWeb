import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

export default function Login() {
const navigate = useNavigate();

return (
<div className="auth-wrapper">
<div className="auth-card">

{/* <div className="logo-container">
<img src={logo} alt="Moving Ads Logo" className="logo-img" />
</div> */}

    
<h2>Login</h2>
<form className="auth-form" onSubmit={() => navigate('/advertiser/home')}>
<input type="email" placeholder="Email Address" />
<input type="password" placeholder="Password" />
<button type="submit" className="btn-primary">Login</button>
</form>
<p style={{color: '#888', marginTop: '20px'}}>New here? <span onClick={() => navigate('/signup')} style={{color: '#00d2ff', cursor:'pointer'}}>Create Account</span></p>
</div>
</div>
);
}