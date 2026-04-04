import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, MapPin, ArrowLeft } from 'lucide-react';
import './PostAd.css';

export default function PostAd() {
const [step, setStep] = useState(1);
const navigate = useNavigate();

return (
<div className="post-ad-wrapper">
<div className="post-ad-card">
<div className="card-header">
<div style={{display:'flex', alignItems:'center', gap:'15px'}}>
<ArrowLeft style={{cursor:'pointer'}} onClick={() => step > 1 ? setStep(step-1) : navigate('/advertiser/home')} />
<h3 style={{margin:0}}>{step === 3 ? 'Define Target Area' : 'Post New Ad'}</h3>
</div>
</div>
</div>
</div> 
);
}