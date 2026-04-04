import React, { useEffect, useState } from 'react';
import { Car, Users, Clock } from 'lucide-react';
import './Advertiser.css';

const Dashboard = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    // This is where we will call your .NET Backend later
    // Example Mock Data:
    setAds([
      { id: 1, title: 'Summer Sale Blitz', status: 'Running', drivers: 12, budget: '$500' },
      { id: 2, title: 'Tech Conference 2026', status: 'Running', drivers: 5, budget: '$1200' },
    ]);
  }, []);

  return (
    <div className="dashboard-container">
      <header className="page-header">
        <h1>Active Campaigns</h1>
        <button className="btn-secondary">My Requests</button>
      </header>

      <div className="ad-list">
        {ads.map(ad => (
          <div key={ad.id} className="ad-card-horizontal">
            <div className="ad-info">
              <h3>{ad.title}</h3>
              <div className="ad-meta">
                <span><Users size={16}/> {ad.drivers} Drivers</span>
                <span><Clock size={16}/> {ad.status}</span>
              </div>
            </div>
            
            <div className="ad-actions">
              {/* Clicking this car icon navigates to find drivers */}
              <button className="car-action-btn" title="Find Drivers">
                <Car size={32} />
                <span>Find Drivers</span>
              </button>
              <button className="btn-outline">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;