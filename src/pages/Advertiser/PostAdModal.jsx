import React, { useState } from 'react';
import { X, Upload } from 'lucide-react';
import axios from 'axios';
import { api } from '../../api/api';

export default function PostAdModal({ onClose, refreshAds }) {

  const [formData, setFormData] = useState({
    AdTitle: '',
    MediaType: 'image',
    MediaName: '',
    MediaPath: '',
    UserId: JSON.parse(localStorage.getItem("user"))?.UserId,
    StartingDate: '',
    EndingDate: '',
    Category: '',
    Status: 'inactive',
  });

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ Upload to Cloudinary
  const uploadToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "MovingAds"); // 🔴 change this
    data.append("cloud_name", "dgolfena6"); // optional if using URL endpoint

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dgolfena6/upload",
      data
    );
console.log("res");
    return res.data.secure_url;
  };

  // ✅ POST AD
  const handlePost = async () => {
    try {
      console.log("payload1234");
      setLoading(true);

      let mediaUrl = "";

      // 1. upload image first
      if (file) {
        mediaUrl = await uploadToCloudinary(file);
      }

      // 2. send to backend
      const payload = {
        ...formData,
        MediaPath: mediaUrl,
        MediaName: file?.name || ""
      };

      await api.post('/api/ad/createAd', payload);
      console.log(payload);

      alert("Ad Posted Successfully!");
      refreshAds?.();
      onClose();

    } catch (e) {
      console.log(e);
      // console.log(payload);
      alert("Error posting ad");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.header}>
          <X onClick={onClose} style={{ cursor: 'pointer' }} />
          <h3>Post New Ad</h3>
          <div />
        </div>

        <div style={styles.body}>

          {/* FILE UPLOAD */}
          <div style={styles.uploadBox}>
            <input
              type="file"
              accept="image/*,video/*"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <p>{file ? file.name : "Upload Ad Image/Video"}</p>
          </div>

          <label>Ad Title</label>
          <input
            style={styles.input}
            onChange={(e) =>
              setFormData({ ...formData, AdTitle: e.target.value })
            }
          />

          <label>Category</label>
          <input
            style={styles.input}
            onChange={(e) =>
              setFormData({ ...formData, Category: e.target.value })
            }
          />

          <div style={styles.row}>
            <input
              type="date"
              style={styles.input}
              onChange={(e) =>
                setFormData({ ...formData, StartingDate: e.target.value })
              }
            />
            <input
              type="date"
              style={styles.input}
              onChange={(e) =>
                setFormData({ ...formData, EndingDate: e.target.value })
              }
            />
          </div>

          <input
            type="number"
            placeholder="Budget"
            style={styles.input}
            onChange={(e) =>
              setFormData({ ...formData, Budget: e.target.value })
            }
          />

          <button style={styles.btnMain} onClick={handlePost}>
            {loading ? "Posting..." : "Post Ad"}
          </button>

        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    background: 'white',
    width: '450px',
    borderRadius: '20px',
    overflow: 'hidden'
  },
  header: {
    background: '#00ccbb',
    color: 'white',
    padding: 15,
    display: 'flex',
    justifyContent: 'space-between'
  },
  body: { padding: 20 },
  uploadBox: {
    border: '2px dashed #ccc',
    padding: 20,
    marginBottom: 15,
    textAlign: 'center'
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    border: '1px solid #ddd',
    borderRadius: 8
  },
  row: {
    display: 'flex',
    gap: 10
  },
  btnMain: {
    width: '100%',
    padding: 12,
    background: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: 10
  }
};