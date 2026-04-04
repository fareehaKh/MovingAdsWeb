import React from 'react';
import { Search, MapPin } from 'lucide-react';

export default function AdsList({ ads, loading, onFindDrivers }) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.topBar}>
        <h2 style={{margin:0}}>My Ads</h2>
        <button onClick={onFindDrivers} style={styles.searchBtn}><Search size={20}/> Find Drivers</button>
      </div>

      {loading ? <p>Loading Ads...</p> : (
        <div style={styles.grid}>
          {ads.map(ad => (
            <div key={ad.id} style={styles.card}>
              <div style={styles.cardHeader}>
                <h4 style={{margin:0}}>{ad.name}</h4>
                <span style={styles.status}>Active</span>
              </div>
              <p style={styles.detail}><MapPin size={14}/> {ad.location}</p>
              <p style={styles.detail}>📅 {ad.dates}</p>
              <div style={styles.priceRow}>
                <b>Rs {ad.rate}/km</b>
                <button style={styles.detBtn}>Details</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  wrapper: { padding: '20px' },
  topBar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' },
  searchBtn: { background: '#00d2ff', border: 'none', padding: '10px 15px', borderRadius: '8px', color: 'white', display: 'flex', gap: '5px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '15px' },
  card: { background: 'white', padding: '15px', borderRadius: '15px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
  cardHeader: { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' },
  status: { color: '#2ecc71', fontSize: '12px', fontWeight: 'bold' },
  detail: { fontSize: '13px', color: '#666', display: 'flex', alignItems: 'center', gap: '5px', margin: '5px 0' },
  priceRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' },
  detBtn: { background: 'none', border: '1px solid #00d2ff', color: '#00d2ff', padding: '5px 12px', borderRadius: '5px' }
};