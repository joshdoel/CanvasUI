// HappySubmissionPopup.jsx
import React, { useState } from 'react';
import './HappySubmissionPopup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faSmile } from '@fortawesome/free-solid-svg-icons';


const HappySubmissionPopup = ({ onClose }) => {
  const [showSubmitMessage, setShowSubmitMessage] = useState(false);

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

      // Close the happy submission popup after a delay
      setTimeout(() => {
        setShowSubmitMessage(false);
        onClose();
      }, 2000); // Adjust the delay time as needed
    }
  };

  return (
    <div className="happy-submission-popup" onDragOver={handleDragOver} onDrop={handleDrop}>
      {showSubmitMessage && (
        <div className="submit-message">
          <h2>Assignment Submitted!</h2>
        </div>
      )}
      <div className={`icon-container ${showSubmitMessage ? 'hide' : ''}`} draggable="true" onDragStart={(e) => e.dataTransfer.setData('text/plain', 'file-icon')}>
        <FontAwesomeIcon icon={faFileAlt} className="icon" />
      </div>
      <div className={`icon-container smiley-face ${showSubmitMessage ? 'hide' : ''}`}>
        <FontAwesomeIcon icon={faSmile} className="icon" />
      </div>
    </div>
  );
};

export default HappySubmissionPopup;
