import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../api/api';

export default function AdDetails() {
  const { id } = useParams();
  const [ad, setAd] = useState(null);
  const [drivers, setDrivers] = useState([]);
  const [fences, setFences] = useState([]);

  useEffect(() => {
    fetchAd();
    fetchDrivers();
    fetchFences();
  }, []);

  const fetchAd = async () => {
    const res = await api.get(`/api/ad/GetAdByid/${id}`);
    setAd(res.data);
  };

  const fetchDrivers = async () => {
    const res = await api.get(`/api/adassignment/byad/${id}`);
    setDrivers(res.data);
  };

  const fetchFences = async () => {
    const res = await api.get(`/api/adfence/ad/${id}`);
    setFences(res.data);
  };

  const pauseAd = () => api.put(`/api/adassignment/pause/${id}`);
  const resumeAd = () => api.put(`/api/adassignment/resume/${id}`);
  const completeAd = () => api.put(`/api/adassignment/terminate/${id}`);

  if (!ad) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>

      {/* HEADER */}
      <div style={{ display: 'flex', gap: 20 }}>

        <img
          src={ad.MediaPath}
          style={{
            width: 250,
            height: 180,
            objectFit: 'cover',
            borderRadius: 10
          }}
        />

        <div>
          <h2>{ad.AdTitle}</h2>
          <p>Status: {ad.Status}</p>
          <p>Category: {ad.Category}</p>

          {/* STATUS ACTIONS */}
          {ad.Status === 'active' && (
            <>
              <button onClick={pauseAd}>Pause</button>
              <button onClick={completeAd}>Complete</button>
            </>
          )}

          {ad.Status === 'paused' && (
            <>
              <button onClick={resumeAd}>Resume</button>
              <button onClick={completeAd}>Complete</button>
            </>
          )}

          {ad.Status === 'completed' && (
            <button>Republish</button>
          )}
        </div>

      </div>

      {/* DRIVERS */}
      <h3 style={{ marginTop: 20 }}>Assigned Drivers</h3>

      <div style={{ display: 'flex', gap: 10, overflowX: 'auto' }}>
        {drivers.map((d) => (
          <div
            key={d.AssignId}
            style={{
              minWidth: 200,
              padding: 10,
              background: '#fff',
              borderRadius: 10
            }}
          >
            <p>{d.DriverName}</p>
            <p>{d.VehicleModel}</p>
          </div>
        ))}
      </div>

      {/* FENCES (SCROLLABLE) */}
      <h3 style={{ marginTop: 20 }}>Geofences</h3>

      <div style={{ maxHeight: 200, overflowY: 'auto' }}>
        {fences.map((f) => (
          <div
            key={f.AdFenceId}
            style={{
              padding: 10,
              marginBottom: 8,
              background: '#f1f1f1',
              borderRadius: 8
            }}
          >
            <p><b>{f.Label}</b></p>
            <p style={{ fontSize: 12 }}>
              Polygon points saved
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}