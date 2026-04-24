import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";

export default function RateDriver() {
  const [rating, setRating] = useState(1);

  const { adId, driverId } = useParams();

  // Temporary logged-in advertiser id
  const ratedBy = 1;

  const submitRating = async () => {
    try {
      await api.post("/api/rating/add", {
        RatedBy: ratedBy,
        RatedTo: Number(driverId),
        RatePoints: Number(rating),
        AdId: Number(adId),
      });

      alert("Rating submitted successfully!");
    } catch (error) {
      console.log(error);
      alert("Failed to submit rating");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Rate Driver</h2>

      <input
        type="number"
        min="1"
        max="5"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        style={{
          padding: "8px",
          width: "80px",
          marginRight: "10px",
        }}
      />

      <button onClick={submitRating}>
        Submit Rating
      </button>
    </div>
  );
}