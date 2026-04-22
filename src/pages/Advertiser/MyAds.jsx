// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AdsList from './AdsList';
// import PostAdModal from './PostAdModal';
// import { Plus } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// export default function MyAds() {
//   const [ads, setAds] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isModalOpen, setModalOpen] = useState(false);

//   const navigate = useNavigate();

//   const fetchAds = async () => {
//     try {
//       setAds([
//         { id: 1, name: "Dove Shampoo", location: "Rawalpindi", dates: "25 Oct - 29 Oct", rate: "300" },
//       ]);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching ads:", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAds();
//   }, []);

//   return (
//     <div style={styles.container}>
      
//       <AdsList 
//         ads={ads} 
//         loading={loading} 
//         onFindDrivers={() => navigate('/advertiser/find-drivers')}
//       />

//       <button style={styles.fab} onClick={() => setModalOpen(true)}>
//         <Plus color="white" size={30} />
//       </button>

//       {isModalOpen && (
//         <PostAdModal 
//           onClose={() => setModalOpen(false)} 
//           refreshAds={fetchAds}
//         />
//       )}
//     </div>
//   );
// }

// const styles = {
//   container: { background: '#f8f9fa', minHeight: '100vh', position: 'relative' },
//   fab: { 
//     position: 'fixed', bottom: '30px', right: '20px', 
//     width: '60px', height: '60px', borderRadius: '30px', 
//     background: '#00d2ff', border: 'none', cursor: 'pointer',
//     boxShadow: '0 4px 10px rgba(0,0,0,0.3)', zIndex: 100
//   }
// };







import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api/api';

export default function MyAds() {
  const [ads, setAds] = useState([]);
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    fetchAds();
  }, []);

  const fetchAds = async () => {
    try {
      const res = await api.get('/api/ad/GetAllAds');
      setAds(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredAds =
    filter === 'All'
      ? ads
      : ads.filter((a) => a.Status?.toLowerCase() === filter.toLowerCase());

  return (
    <div style={{ padding: 20, background: '#f5f5f5', minHeight: '100vh' }}>
      
      <h2>My Ads</h2>

      {/* FILTERS */}
      <div style={{ marginBottom: 15 }}>
        {['All', 'Active', 'Paused', 'Completed'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              marginRight: 8,
              padding: '6px 10px',
              borderRadius: 6,
              border: 'none',
              background: filter === f ? '#3f51b5' : '#ddd',
              color: filter === f ? 'white' : '#000',
              cursor: 'pointer'
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* ADS CARDS */}
      {filteredAds.map((ad) => (
        <div
          key={ad.AdId}
          onClick={() => navigate(`/advertiser/ad/${ad.AdId}`)}
          style={{
            display: 'flex',
            alignItems: 'center',
            background: '#fff',
            padding: 12,
            borderRadius: 10,
            marginBottom: 10,
            boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
            cursor: 'pointer'
          }}
        >

          {/* IMAGE */}
          <img
            src={ad.MediaPath}
            alt="ad"
            style={{
              width: 90,
              height: 70,
              objectFit: 'cover',
              borderRadius: 8,
              marginRight: 12
            }}
          />

          {/* INFO */}
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: 0 }}>{ad.AdTitle}</h3>

            <p style={{ margin: 0, fontSize: 12, color: '#666' }}>
              Status: {ad.Status} | Category: {ad.Category}
            </p>

            <p style={{ margin: 0, fontSize: 12, color: '#777' }}>
              Assigned Drivers: {ad.driverCount || 0}
            </p>
          </div>

          {/* BUTTONS (STOP PROPAGATION so card click doesn't trigger) */}
          <div style={{ display: 'flex', gap: 8 }}>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/advertiser/ad/${ad.AdId}`);
              }}
              style={{
                background: '#607d8b',
                color: 'white',
                border: 'none',
                padding: '6px 10px',
                borderRadius: 6
              }}
            >
              Details
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/advertiser/fence/${ad.AdId}`);
              }}
              style={{
                background: '#3f51b5',
                color: 'white',
                border: 'none',
                padding: '6px 10px',
                borderRadius: 6
              }}
            >
              Fence
            </button>

          </div>

        </div>
      ))}
    </div>
  );
} 