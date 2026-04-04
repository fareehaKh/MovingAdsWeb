// // import React from 'react';
// // import { Car, Star, MapPin, Plus } from 'lucide-react';
// // import './MyAds.module.css';
// // import { Navigate, useNavigate } from 'react-router-dom';

// // export default function MyAds() {
// // const ads = [
// // { id: 1, name: "Summer Sale", img: "", status: "Active" }
// // ];

// // const navigate = useNavigate();

// // return (
// // <div style={{padding: '30px', background: '#0f0f1e', minHeight: '100vh'}}>
// // <div style={{display:'flex', justifyContent:'space-between', marginBottom:'30px'}}>
// // <h1 style={{color:'white'}}>My Ads</h1>
// // <button 
// // style={{background:'#3f51b5', color:'white', border:'none', padding:'10px 20px', borderRadius:'8px', cursor: 'pointer'}}
// // onClick={() => navigate('/advertiser/post-ad')}
// // ><Plus /> Post New Ad</button>
// // </div>
// // {ads.map(ad => (
// // <div 
// // key={ad.id} 
// // style={{background:'#1e1e30', borderRadius:'15px', padding:'20px', display:'flex', alignItems:'center', marginBottom:'15px'}}>

// // <img src={ad.img} style={{width:'100px', height:'70px', borderRadius:'10px', objectFit:'cover'}} />

// // <div style={{flex:1, paddingLeft:'20px'}}>
// // <h3 style={{color:'white', margin:0}}>{ad.name}</h3>

// // <span style={{color:'#888', fontSize:'12px'}}><MapPin size={12}/> 124km covered</span>
// // </div>

// // <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
// // <button 
// // style={{background:'#3f51b5', color:'white', border:'none', padding:'8px 15px', borderRadius:'5px', cursor: 'pointer'}}>Details</button>
// // <button 
// // style={{background:'transparent', border:'1px solid #3f51b5', color:'#3f51b5', padding:'5px', borderRadius:'5px', cursor: 'pointer'}}>Rate Driver</button>
// // </div>
// // </div>
// // ))}
// // </div>
// // );
// // }
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { 
//   Car, Star, MapPin, Plus, Calendar, DollarSign, 
//   ArrowLeft, Navigation, Upload, Search, MousePointer2 
// } from 'lucide-react';
// import schoolImg from '../../assets/school.png';
// import doveImg from '../../assets/dove.jpg';

// export default function MyAds() {
//   const navigate = useNavigate();
//   // Views: 'list', 'details', 'tracker', 'post-ad-1', 'geofence', 'rate'
//   const [view, setView] = useState('list');
//   const [selectedAd, setSelectedAd] = useState(null);
//   const [rating, setRating] = useState(0);

//   const ads = [
//     { 
//       id: 1, name: "Siddeeq Public School", img: schoolImg, 
//       status: "Active", dates: "25 Oct - 29 Oct", rate: "Rs 300/Km", 
//       location: "6th Road, Rawalpindi", kmDriven: 124, amount: 37200,
//       driver: { name: "Ahmed Abbas", car: "Toyota Corolla 2022", avatar: "https://i.pravatar.cc/100?u=ahmed" }
//     },
//     { 
//       id: 2, name: "Dove Shampoo", img: doveImg, 
//       status: "Active", dates: "01 Nov - 10 Nov", rate: "Rs 250/Km", 
//       location: "Murree Road, Rawalpindi", kmDriven: 45, amount: 11250,
//       driver: { name: "Umer Khan", car: "Honda Civic 2023", avatar: "https://i.pravatar.cc/100?u=umer" }
//     }
//   ];

//   // --- 1. RATE DRIVER SCREEN ---
//   const RateDriverView = ({ ad }) => (
//     <div style={styles.glassCard}>
//       <div style={styles.headerBar}><ArrowLeft onClick={() => setView('list')} style={{cursor:'pointer'}}/> Rate Driver</div>
      
//       {/* Driver Info Card */}
//       <div style={styles.driverProfileCard}>
//         <img src={ad.driver.avatar} style={styles.avatarImg} />
//         <div style={{marginLeft: '15px'}}>
//           <h3 style={{margin: 0, color: 'white'}}>{ad.driver.name}</h3>
//           <div style={styles.driverSubText}><Car size={14}/> {ad.driver.car}</div>
//           <div style={styles.driverSubText}><MapPin size={14}/> {ad.location}</div>
//         </div>
//       </div>

//       <div style={styles.ratingSection}>
//         <h4 style={{textAlign: 'center', marginBottom: '10px'}}>How was your experience?</h4>
//         <p style={{textAlign: 'center', fontSize: '12px', color: '#888', marginBottom: '20px'}}>Your feedback helps drivers improve their service</p>
        
//         <div style={styles.starsRow}>
//           {[1, 2, 3, 4, 5].map((star) => (
//             <Star 
//               key={star} 
//               size={32} 
//               fill={rating >= star ? "#FFD700" : "none"} 
//               color={rating >= star ? "#FFD700" : "#888"}
//               onClick={() => setRating(star)}
//               style={{cursor: 'pointer'}}
//             />
//           ))}
//         </div>
//       </div>

//       <div style={{marginTop: '25px'}}>
//         <label style={styles.label}>Share more details (optional)</label>
//         <textarea 
//           style={{...styles.input, height: '100px', paddingTop: '12px'}} 
//           placeholder="Tell us about your experience with this driver..."
//         />
//         <p style={{fontSize: '11px', color: '#666', marginTop: '8px', textAlign: 'center'}}>
//           Your review will be visible to the driver and help them improve.
//         </p>
//       </div>

//       <button style={styles.btnBlue} onClick={() => setView('list')}>Submit Rating</button>
//       <button style={styles.btnDark} onClick={() => setView('list')}>Skip for now</button>
//     </div>
//   );

//   // --- 2. AD DETAILS SCREEN ---
//   const AdDetailsView = ({ ad }) => (
//     <div style={styles.glassCard}>
//       <div style={styles.headerBar}><ArrowLeft onClick={() => setView('list')} style={{cursor:'pointer'}}/> Ad Details</div>
//       <div style={{textAlign: 'center', padding: '20px'}}>
//         <img src={ad.img} style={styles.largeImg} />
//         <h2 style={{color: 'white'}}>{ad.name}</h2>
//       </div>
//       <div style={styles.infoBox}>
//         <div style={styles.infoRow}><Calendar size={18} color="#00d2ff"/> {ad.dates}</div>
//         <div style={styles.infoRow}><DollarSign size={18} color="#00d2ff"/> {ad.rate}</div>
//         <div style={styles.infoRow}><MapPin size={18} color="#00d2ff"/> {ad.location}</div>
//       </div>
//       <div style={{display:'flex', gap:'10px', marginTop:'20px'}}>
//         <button style={{...styles.btnAction, background:'#ff4d4d'}}>Terminate</button>
//         <button style={{...styles.btnAction, background:'#00d2ff', color:'#000'}}>Extend</button>
//       </div>
//       <button onClick={() => setView('tracker')} style={styles.trackBtn}>Track Drivers</button>
//     </div>
//   );

//   // --- 3. LIVE TRACKER SCREEN ---
//   const AdTrackerView = ({ ad }) => (
//     <div style={styles.glassCard}>
//       <div style={styles.headerBar}><ArrowLeft onClick={() => setView('details')} style={{cursor:'pointer'}}/> AD Tracker</div>
//       <div style={styles.statsRow}>
//         <div style={styles.statBox}><span>Km's Driven</span><strong>{ad.kmDriven}</strong></div>
//         <div style={styles.statBox}><span>Total Amount</span><strong>RS {ad.amount}</strong></div>
//       </div>
//       <div style={styles.mapArea}>
//          <div style={styles.mapPlaceholder}>
//             <Navigation size={40} color="#00d2ff" style={{transform:'rotate(45deg)'}}/>
//             <div style={styles.polygonOverlay}></div>
//          </div>
//       </div>
//       <div style={styles.areaBadge}>{ad.location}</div>
//     </div>
//   );

//   // --- 4. POST AD & GEOFENCE (Logic remains as you had it) ---
//   const PostAdForm = () => (
//     <div style={styles.glassCard}>
//       <div style={styles.headerBar}><ArrowLeft onClick={() => setView('list')} style={{cursor:'pointer'}}/> Post New Ad</div>
//       <div style={styles.uploadSection}><Upload size={30} /> <p>Upload Ad Image or Video</p></div>
//       <div style={styles.formGroup}><label>Ad Title*</label><input style={styles.input} placeholder="Enter ad title" /></div>
//       <div style={{display:'flex', gap:'10px'}}>
//         <div style={{flex:1}}><label style={styles.label}>Type</label><select style={styles.input}><option>Car Wrap</option></select></div>
//         <div style={{flex:1}}><label style={styles.label}>Category</label><select style={styles.input}><option>Education</option></select></div>
//       </div>
//       <button onClick={() => setView('geofence')} style={styles.locationTrigger}><MapPin size={20} /> Add Location (Geofence)</button>
//       <div style={{display:'flex', gap:'10px', marginTop:'20px'}}>
//         <button style={styles.btnBlue} onClick={() => setView('list')}>Post Ad</button>
//         <button style={styles.btnDark} onClick={() => setView('list')}>Save Draft</button>
//       </div>
//     </div>
//   );

//   const GeofenceView = () => (
//     <div style={styles.glassCard}>
//       <div style={styles.headerBar}><ArrowLeft onClick={() => setView('post-ad-1')} style={{cursor:'pointer'}}/> Define Target Area</div>
//       <div style={styles.searchBar}><Search size={18}/> <input placeholder="Search for area (e.g. 6th Road)" /></div>
//       <div style={styles.mapPlaceholder}><div style={styles.polygonOverlay}></div></div>
//       <button style={styles.btnBlue} onClick={() => setView('post-ad-1')}>Add Fence</button>
//     </div>
//   );

//   // --- SUB-COMPONENT: STATS VIEW ---
// const StatsView = () => {
//   const statsData = [
//     { title: "Active Ads", value: "2", icon: <Calendar size={32} color="#3f51b5" />, bg: "rgba(63, 81, 181, 0.1)" },
//     { title: "Drivers", value: "2", icon: <Car size={32} color="#000" />, bg: "rgba(255, 255, 255, 0.05)" },
//     { title: "Total Spent", value: "RS 1000", icon: <DollarSign size={32} color="#2ecc71" />, bg: "rgba(46, 204, 113, 0.1)" },
//     { title: "Total Ads", value: "3", icon: <Plus size={32} color="#f39c12" />, bg: "rgba(243, 156, 18, 0.1)" }
//   ];

//   return (
//     <div style={styles.glassCard}>
//       <div style={styles.headerBar}>
//         <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
//            <Navigation size={20} style={{transform: 'rotate(90deg)'}}/> 
//            Stats
//         </div>
//       </div>
      
//       <div style={styles.statsGrid}>
//         {statsData.map((stat, index) => (
//           <div key={index} style={{...styles.statCard, background: stat.bg}}>
//             <div style={{flex: 1}}>
//               <div style={styles.statTitle}>{stat.title}</div>
//               <div style={styles.statValue}>{stat.value}</div>
//             </div>
//             <div style={styles.statIconWrapper}>
//               {stat.icon}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Optional: Growth Chart Placeholder */}
//       <div style={{marginTop: '30px', padding: '20px', background: 'rgba(255,255,255,0.02)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)'}}>
//         <h4 style={{color: '#888', marginBottom: '15px'}}>Performance Overview</h4>
//         <div style={{height: '150px', display: 'flex', alignItems: 'flex-end', gap: '10px', padding: '0 10px'}}>
//           {[40, 70, 45, 90, 65, 80, 95].map((h, i) => (
//             <div key={i} style={{flex: 1, background: '#00d2ff', height: `${h}%`, borderRadius: '5px 5px 0 0', opacity: 0.5 + (h/200)}} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };



//   return (
//     <div style={styles.mainWrapper}>
//       <div style={{width:'100%', maxWidth:'600px'}}>
//         {view === 'list' && (
//           <>
//             <div style={{display:'flex', justifyContent:'space-between', marginBottom:'20px'}}>
//               <h1 style={{color:'white', margin:0}}>My Ads</h1>
//               <button style={styles.addBtn} onClick={() => setView('post-ad-1')}><Plus size={18}/> Post New Ad</button>
//             </div>
//             {ads.map(ad => (
//               <div key={ad.id} style={styles.adRow}>
//                 <img src={ad.img} style={styles.thumb} />
//                 <div style={{flex:1, marginLeft:'15px'}}>
//                   <h4 style={{margin:0, color:'white'}}>{ad.name}</h4>
//                   <div style={{fontSize:'12px', color:'#888'}}><MapPin size={12}/> {ad.location}</div>
//                 </div>
//                 <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
//                   <button style={styles.detailsBtn} onClick={() => {setSelectedAd(ad); setView('details')}}>Details</button>
//                   <button style={styles.rateBtnSmall} onClick={() => {setSelectedAd(ad); setView('rate'); setRating(0)}}>Rate Driver</button>
//                 </div>
//               </div>
//             ))}
//           </>
//         )}
//         {view === 'details' && <AdDetailsView ad={selectedAd} />}
//         {view === 'tracker' && <AdTrackerView ad={selectedAd} />}
//         {view === 'post-ad-1' && <PostAdForm />}
//         {view === 'geofence' && <GeofenceView />}
//         {view === 'rate' && <RateDriverView ad={selectedAd} />}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   mainWrapper: { background: '#050505', minHeight: '100vh', padding: '40px 20px', display: 'flex', justifyContent: 'center' },
//   glassCard: { background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderRadius: '25px', padding: '25px', border: '1px solid rgba(255,255,255,0.1)', color:'white' },
//   headerBar: { background: '#00d2ff', color: '#000', padding: '15px', borderRadius: '15px 15px 0 0', margin: '-25px -25px 20px -25px', display: 'flex', alignItems: 'center', gap: '15px', fontWeight: 'bold' },
//   adRow: { display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '15px', marginBottom: '10px', border: '1px solid rgba(255,255,255,0.05)' },
//   thumb: { width: '60px', height: '60px', borderRadius: '10px', objectFit: 'cover' },
//   detailsBtn: { background: 'rgba(0,210,255,0.1)', color: '#00d2ff', border: '1px solid #00d2ff', borderRadius: '8px', padding: '6px 15px', cursor: 'pointer', fontSize: '13px' },
//   rateBtnSmall: { background: 'transparent', border: '1px solid #555', color: '#888', borderRadius: '8px', padding: '6px 15px', cursor: 'pointer', fontSize: '11px' },
//   driverProfileCard: { display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '20px' },
//   avatarImg: { width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #00d2ff' },
//   driverSubText: { fontSize: '12px', color: '#888', display: 'flex', alignItems: 'center', gap: '5px', marginTop: '3px' },
//   ratingSection: { background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' },
//   starsRow: { display: 'flex', justifyContent: 'center', gap: '10px' },
//   largeImg: { width: '100px', height: '100px', borderRadius: '15px', background: '#fff', padding: '5px' },
//   infoBox: { background: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '15px' },
//   infoRow: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', fontSize: '14px' },
//   btnAction: { flex: 1, padding: '12px', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' },
//   trackBtn: { width: '100%', padding: '15px', background: '#000', color: '#fff', border: '1px solid #333', borderRadius: '12px', marginTop: '15px', fontWeight: 'bold', cursor: 'pointer' },
//   statsRow: { display: 'flex', gap: '15px', marginBottom: '20px' },
//   statBox: { flex: 1, background: 'rgba(0,210,255,0.1)', padding: '15px', borderRadius: '15px', textAlign: 'center', display: 'flex', flexDirection: 'column' },
//   mapArea: { height: '250px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', position: 'relative', overflow: 'hidden' },
//   mapPlaceholder: { height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' },
//   polygonOverlay: { width: '120px', height: '120px', border: '2px solid #00d2ff', background: 'rgba(0,210,255,0.1)', transform: 'rotate(45deg)', position:'absolute' },
//   areaBadge: { background: '#fff', color: '#000', padding: '10px 20px', borderRadius: '10px', margin: '15px auto 0', width: 'fit-content', fontWeight: 'bold' },
//   uploadSection: { border: '2px dashed rgba(255,255,255,0.2)', padding: '30px', borderRadius: '20px', textAlign: 'center', marginBottom: '20px' },
//   input: { width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#fff', outline: 'none', boxSizing:'border-box' },
//   label: { fontSize: '12px', color: '#888', display: 'block', marginBottom: '5px' },
//   locationTrigger: { width: '100%', padding: '15px', background: 'rgba(0,210,255,0.1)', color: '#00d2ff', border: '1px solid #00d2ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '15px', cursor: 'pointer' },
//   btnBlue: { width: '100%', padding: '15px', background: '#00d2ff', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', marginTop: '20px' },
//   btnDark: { width: '100%', padding: '15px', background: '#222', color: '#fff', border: 'none', borderRadius: '12px', cursor: 'pointer', marginTop: '10px' },
//   searchBar: { display:'flex', alignItems:'center', gap:'10px', background:'rgba(255,255,255,0.05)', padding:'10px 15px', borderRadius:'10px', marginBottom:'20px' },
//   addBtn: { background: '#00d2ff', color: '#000', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' },


//   statsGrid: {
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr', // 2x2 Grid for web
//     gap: '20px',
//     marginTop: '10px'
//   },
//   statCard: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: '25px',
//     borderRadius: '20px',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     transition: 'transform 0.2s',
//     cursor: 'default'
//   },
//   statTitle: {
//     color: 'white',
//     fontSize: '18px',
//     fontWeight: '600',
//     marginBottom: '5px'
//   },
//   statValue: {
//     color: '#00d2ff',
//     fontSize: '28px',
//     fontWeight: 'bold'
//   },
//   statIconWrapper: {
//     background: 'rgba(255,255,255,0.1)',
//     padding: '12px',
//     borderRadius: '12px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// };

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdsList from './AdsList';
import PostAdModal from './PostAdModal';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MyAds() {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();

  const fetchAds = async () => {
    try {
      setAds([
        { id: 1, name: "Dove Shampoo", location: "Rawalpindi", dates: "25 Oct - 29 Oct", rate: "300" },
      ]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching ads:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  return (
    <div style={styles.container}>
      
      <AdsList 
        ads={ads} 
        loading={loading} 
        onFindDrivers={() => navigate('/advertiser/find-drivers')}
      />

      <button style={styles.fab} onClick={() => setModalOpen(true)}>
        <Plus color="white" size={30} />
      </button>

      {isModalOpen && (
        <PostAdModal 
          onClose={() => setModalOpen(false)} 
          refreshAds={fetchAds}
        />
      )}
    </div>
  );
}

const styles = {
  container: { background: '#f8f9fa', minHeight: '100vh', position: 'relative' },
  fab: { 
    position: 'fixed', bottom: '30px', right: '20px', 
    width: '60px', height: '60px', borderRadius: '30px', 
    background: '#00d2ff', border: 'none', cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)', zIndex: 100
  }
};