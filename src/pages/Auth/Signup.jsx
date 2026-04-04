import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

export default function Signup() {
const [type, setType] = useState('Individual');
const navigate = useNavigate();

return (
<div className="auth-wrapper">
<div className="auth-card">
    
{/* <div className="logo-container">
<img src={logo} alt="Moving Ads Logo" className="logo-img" />
</div> */}


<h2>Register</h2>
<div className="type-toggle">
<button className={type === 'Individual' ? 'type-btn active' : 'type-btn'} onClick={() => setType('Individual')}>Individual</button>
<button className={type === 'Agency' ? 'type-btn active' : 'type-btn'} onClick={() => setType('Agency')}>Agency</button>
</div>
<form className="auth-form" onSubmit={(e) => e.preventDefault()}>
<input type="text" placeholder="Full Name" />
<input type="email" placeholder="Email Address" />
<input type="password" placeholder="Password" />
<button type="submit" className="btn-primary">Sign Up</button>
</form>
<p style={{color: '#888', marginTop: '20px'}}>Already have an account? <span onClick={() => navigate('/login')} style={{color: '#00d2ff', cursor:'pointer'}}>Login</span></p>
</div>
</div>
);
}