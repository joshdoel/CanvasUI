// SubmissionPopup.jsx
import React from 'react';
import './SubmissionPopup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

const SubmissionPopup = ({ onClose }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', 'file-icon');
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const draggedItem = e.dataTransfer.getData('text/plain');

    // Check if the dragged item is the file icon
    if (draggedItem === 'file-icon') {
      onClose(); // Close the submission popup
    }
  };

  return (
    <div className="submission-popup" onDragOver={handleDragOver} onDrop={handleDrop}>
      <div className="icon-container" draggable="true" onDragStart={handleDragStart}>
        <FontAwesomeIcon icon={faFileAlt} className="icon" />
      </div>
      <div className="icon-container">
        <FontAwesomeIcon icon={faTrash} className="icon" />
      </div>
    </div>
  );
};

export default SubmissionPopup;
