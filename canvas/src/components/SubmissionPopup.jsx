import React, { useState } from 'react';
import './SubmissionPopup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

const SubmissionPopup = ({ onClose }) => {
  const [showSubmitMessage, setShowSubmitMessage] = useState(false);

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
      // Hide the paper
      const paperIcon = document.querySelector('.icon-container');
      if (paperIcon) {
        paperIcon.style.transition = 'opacity 1s';
        paperIcon.style.opacity = '0';
        paperIcon.style.display = 'none';
      }

      // Show the submit message
      setShowSubmitMessage(true);

      // Close the submission popup after a delay
      setTimeout(() => {
        setShowSubmitMessage(false);
        onClose();
      }, 2000); // Adjust the delay time as needed
    }
  };

  return (
    <div className="submission-popup" onDragOver={handleDragOver} onDrop={handleDrop}>
      {showSubmitMessage && (
        <div className="submit-message">
          <h2>Assignment Submitted!</h2>
        </div>
      )}
      <div className={`icon-container ${showSubmitMessage ? 'hide' : ''}`} draggable="true" onDragStart={handleDragStart}>
        <FontAwesomeIcon icon={faFileAlt} className="icon" />
      </div>
      <div className="icon-container">
        <FontAwesomeIcon icon={faTrash} className="icon" />
      </div>
    </div>
  );
};

export default SubmissionPopup;
