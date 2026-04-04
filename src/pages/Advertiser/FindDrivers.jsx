import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FindDrivers() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Find Drivers</h2>

      <button 
        onClick={() => navigate('/advertiser/my-ads')}
        style={{
          padding: '10px 15px',
          background: '#3f51b5',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Back
      </button>
    </div>
  );
}