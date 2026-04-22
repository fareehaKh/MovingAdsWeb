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
import AdsList from './AdsList';
import axios from 'axios';

export default function MyAds() {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAds = async () => {
    try {
      // Replace with your API
      // const res = await axios.get('http://localhost/MovingAdsBackend/api/ads');

      setAds([
        {
          id: 1,
          name: "Dove Shampoo Ad",
          location: "Rawalpindi",
          rate: "300"
        }
      ]);

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  return (
    <div style={styles.page}>
      <h2>My Ads</h2>

      <AdsList ads={ads} loading={loading} />
    </div>
  );
}

const styles = {
  page: {
    padding: '20px'
  }
};