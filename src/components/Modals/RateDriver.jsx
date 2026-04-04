import React from 'react';
import styles from './Modal.module.css';

const RateDriver = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modalCard}>
        <h2>Rate Driver</h2>
        <p>How was your experience with John Doe?</p>
        
        <div className={styles.starContainer}>
          {[1,2,3,4,5].map(star => <Star key={star} size={32} className={styles.starIcon} />)}
        </div>

        <textarea placeholder="Write a compliment or feedback..." className={styles.feedbackArea} />
        
        <div className={styles.modalActions}>
          <button onClick={onClose} className={styles.cancelBtn}>Cancel</button>
          <button className={styles.submitBtn}>Submit Rating</button>
        </div>
      </div>
    </div>
  );
};