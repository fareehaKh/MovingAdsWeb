import React, { useEffect, useState } from 'react';
import { Car, Users, Clock, Map  } from 'lucide-react';
import './Advertiser.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



const Dashboard = () => {
  const [ads, setAds] = useState([]);
  const navigate = useNavigate();

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
        <button style={{color: 'blue', size:25}} title={'post-ad-modal'} 
        onClick={() => navigate(`/advertiser/post-ad-modal`)}
        >Post New Ad</button>

        {/* <button className="car-action-btn" title="Schedule" onClick={() => navigate(`/advertiser/schedule/${ad.id}`)}>
                <Clock size={20} />
                <span>Schedule</span>
              </button> */}

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
                <Car size={20} />
                <span>Find Drivers</span>
              </button>

              <button className="car-action-btn" title="Schedule" onClick={() => navigate(`/advertiser/schedule/${ad.id}`)}>
                <Clock size={20} />
                <span>Schedule</span>
              </button>

              <button className="car-action-btn" title="Fence">
                <Map size={20} />
                <span>Fence</span>
              </button>
              {/* <button className="btn-outline">View Details</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;