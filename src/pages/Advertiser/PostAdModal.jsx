import React, { useState } from 'react';
import { X, Upload, MapPin } from 'lucide-react';
import axios from 'axios';

export default function PostAdModal({ onClose, refreshAds }) {
  const [formData, setFormData] = useState({
    title: '', type: '', category: '', start: '', end: '', budget: ''
  });

  const handlePost = async () => {
    try {
      // await axios.post('http://your-backend-api.com/ads', formData);
      alert("Ad Posted Successfully!");
      onClose();
    } catch (e) { alert("Error posting ad"); }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.header}>
          <X onClick={onClose} style={{cursor:'pointer'}} />
          <h3 style={{margin:0}}>Post New Ad</h3>
          <div style={{width:24}}></div>
        </div>

        <div style={styles.body}>
          <div style={styles.uploadBox}>
            <Upload size={40} color="#888" />
            <p>Upload Ad Image or Video</p>
          </div>

          <label style={styles.label}>Ad Title*</label>
          <input style={styles.input} placeholder="Enter ad title" onChange={e => setFormData({...formData, title: e.target.value})} />

          <div style={styles.row}>
            <div style={{flex:1}}>
              <label style={styles.label}>Start Date*</label>
              <input type="date" style={styles.input} onChange={e => setFormData({...formData, start: e.target.value})} />
            </div>
            <div style={{flex:1}}>
              <label style={styles.label}>End Date*</label>
              <input type="date" style={styles.input} onChange={e => setFormData({...formData, end: e.target.value})} />
            </div>
          </div>

          <label style={styles.label}>Budget per km*</label>
          <input style={styles.input} placeholder="$ 0.00" type="number" onChange={e => setFormData({...formData, budget: e.target.value})} />

          <button style={styles.locationBtn}>
            <MapPin size={18} /> Add Location
          </button>

          <div style={styles.footerBtns}>
            <button style={styles.btnMain} onClick={handlePost}>Post Ad</button>
            <button style={styles.btnDraft}>Save to Drafts</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 },
  modal: { background: 'white', width: '95%', maxWidth: '450px', height: '90vh', borderRadius: '20px', overflowY: 'auto' },
  header: { background: '#00ccbb', color: 'white', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '20px 20px 0 0' },
  body: { padding: '20px' },
  uploadBox: { border: '2px dashed #ddd', borderRadius: '15px', padding: '30px', textAlign: 'center', marginBottom: '20px', background: '#f9f9f9' },
  label: { fontSize: '13px', fontWeight: 'bold', display: 'block', marginBottom: '5px', marginTop: '10px' },
  input: { width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #ddd', marginBottom: '10px', boxSizing: 'border-box' },
  row: { display: 'flex', gap: '10px' },
  locationBtn: { width: '100%', padding: '12px', background: '#00ccbb', color: 'white', border: 'none', borderRadius: '10px', display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' },
  footerBtns: { marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' },
  btnMain: { padding: '15px', background: '#3498db', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold' },
  btnDraft: { padding: '15px', background: 'white', color: '#3498db', border: '1px solid #3498db', borderRadius: '10px' }
};