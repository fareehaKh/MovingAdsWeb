import React, { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, Polygon, Marker } from "@react-google-maps/api";
import { api } from "../../api/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 33.6844,
  lng: 73.0479,
};

export default function GeoFenceScreen() {
  const { id } = useParams(); // AdId
  const navigate = useNavigate();

  const [points, setPoints] = useState([]);
  const [label, setLabel] = useState("");

  const mapRef = useRef(null);

  // 📍 Add points on click
  const onMapClick = (e) => {
    const newPoint = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };

    setPoints((prev) => [...prev, newPoint]);
  };

  // ❌ Clear polygon
  const handleClear = () => {
    setPoints([]);
  };

  // ✅ Save fence to backend
  const handleSaveFence = async () => {
    if (points.length < 3) {
      alert("Polygon must have at least 3 points");
      return;
    }

    try {
      await api.post("/api/adfence/addfence", {
        AdId: id,
        Label: label,
        Polygon: JSON.stringify(points), // 🔥 important
      });

      alert("Fence saved successfully!");

      navigate(-1); // go back to AdDetails
    } catch (err) {
      console.log(err);
      alert("Error saving fence");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ marginBottom: 10 }}>Create Geofence</h2>

      {/* Label */}
      <input
        type="text"
        placeholder="Enter fence label"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      {/* Buttons */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <button
          onClick={handleSaveFence}
          style={{
            flex: 1,
            background: "#3f51b5",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Save Fence
        </button>

        <button
          onClick={handleClear}
          style={{
            flex: 1,
            background: "#f44336",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Clear
        </button>
      </div>

      {/* MAP */}
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAP_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          onClick={onMapClick}
          onLoad={(map) => (mapRef.current = map)}
        >
          {/* Points */}
          {points.map((point, index) => (
            <Marker key={index} position={point} />
          ))}

          {/* SINGLE POLYGON */}
          {points.length >= 3 && (
            <Polygon
              paths={points}
              options={{
                fillColor: "#3f51b5",
                fillOpacity: 0.3,
                strokeColor: "#3f51b5",
                strokeWeight: 2,
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}