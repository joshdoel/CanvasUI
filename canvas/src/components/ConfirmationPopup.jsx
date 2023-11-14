// ConfirmationPopup.jsx
import React from 'react';
import './ConfirmationPopup.css'; // You can create a separate CSS file for styling

const ConfirmationPopup = ({ onConfirm, onCancel }) => {
  const handleNoClick = () => {
    onCancel(); // Call the onCancel function when the user selects "No"
  };

  return (
    <div className="confirmation-popup">
      <h2>Did you enjoy the assignment?</h2>
      <div className="button-container">
        <button className="yes-button" onClick={onConfirm}>Yes</button>
        <button className="yes-button" onClick={handleNoClick}>No</button>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
