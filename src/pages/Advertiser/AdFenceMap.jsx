import React, { useState } from "react";
import { GoogleMap, LoadScript, Polygon, Marker } from "@react-google-maps/api";
import { useParams } from "react-router-dom";
import axios from "axios";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 33.6844,
  lng: 73.0479,
};

export default function AdFenceMap() {
  const { adId } = useParams();

  const [points, setPoints] = useState([]);
  const [label, setLabel] = useState("");

  // 📍 add point
  const onMapClick = (e) => {
    setPoints([
      ...points,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      },
    ]);
  };

  // ❌ undo
  const undo = () => {
    setPoints(points.slice(0, -1));
  };

  // 🧹 clear
  const clear = () => {
    setPoints([]);
  };

  // 💾 SAVE FENCE (YOUR BACKEND API)
  const saveFence = async () => {
    if (points.length < 3) {
      alert("Minimum 3 points required");
      return;
    }

    const payload = {
      AdId: adId,
      Label: label,
      Polygon: JSON.stringify(points),
    };

    try {
      await axios.post(
        "http://localhost/MovingAdsBackend/api/adfence/addfence",
        payload
      );

      alert("Fence saved successfully!");
      setPoints([]);
      setLabel("");
    } catch (err) {
      console.log(err);
      alert("Error saving fence");
    }
  };

  return (
    <div>

      {/* LABEL + ACTIONS */}
      <div style={{ marginBottom: "10px" }}>
        <input
          placeholder="Fence Label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          style={{ padding: "6px", marginRight: "10px" }}
        />

        <button onClick={saveFence}>Add Fence</button>
        <button onClick={undo}>Undo</button>
        <button onClick={clear}>Clear</button>
      </div>

      {/* MAP */}
      <LoadScript googleMapsApiKey="YOUR_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          onClick={onMapClick}
        >

          {/* MARKERS */}
          {points.map((p, i) => (
            <Marker key={i} position={p} />
          ))}

          {/* POLYGON */}
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