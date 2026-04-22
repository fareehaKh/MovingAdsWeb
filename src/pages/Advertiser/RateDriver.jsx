import React, { useState } from 'react';

export default function RateDriver() {
  const [rating, setRating] = useState(0);

  const submitRating = () => {
    alert("Rating submitted: " + rating);
    // API:
    await api.post('/api/rating/add', {
        RatedBy,
        RatedTo,
        RatePoints,
        AdId
    });
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
      />

      <button onClick={submitRating}>
        Submit Rating
      </button>
    </div>
  );
}