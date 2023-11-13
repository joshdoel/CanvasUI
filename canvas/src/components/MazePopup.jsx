// MazePopup.jsx
import React, { useState, useEffect } from 'react';
import './MazePopup.css';
import DirectionsPopup from './DirectionsPopup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const MazePopup = ({ onClose, onSolve }) => {
  const [failed, setFailed] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);
  const [showDirections, setShowDirections] = useState(true);

  useEffect(() => {
    const canvas = document.getElementById('mazeCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = 500; // Set your desired width
    canvas.height = 500;

    // Draw maze lines
    ctx.beginPath();
    ctx.moveTo(50, 0);
    ctx.lineTo(50, 150);
    ctx.stroke();

    const padding = 0; // Adjust this value based on your layout
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    
    // Draw the upper part of the bottom border
    ctx.moveTo(padding, canvasHeight - padding);
    ctx.lineTo(canvasWidth / 2 - 25, canvasHeight - padding);
    ctx.stroke();
    
    // Draw the lower part of the bottom border with a gap
    ctx.moveTo(canvasWidth / 2 + 25, canvasHeight - padding);
    ctx.lineTo(canvasWidth - padding, canvasHeight - padding);
    ctx.stroke();
    
    // Draw the top border
    ctx.moveTo(padding, padding);
    ctx.lineTo(canvasWidth - padding, padding);
    ctx.stroke();
    
    // Draw the left border
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvasHeight - padding);
    ctx.stroke();
    
    // Draw the right border
    ctx.moveTo(canvasWidth - padding, padding);
    ctx.lineTo(canvasWidth - padding, canvasHeight - padding);
    ctx.stroke();

    ctx.moveTo(275, 500);
    ctx.lineTo(275, 300);
    ctx.stroke();

    ctx.moveTo(225, 500);
    ctx.lineTo(225, 350);
    ctx.stroke();

    ctx.moveTo(275, 300);
    ctx.lineTo(100, 300);
    ctx.stroke();

    ctx.moveTo(225, 350);
    ctx.lineTo(50, 350);
    ctx.stroke();

    ctx.moveTo(50, 350);
    ctx.lineTo(50, 150);
    ctx.stroke();

    ctx.moveTo(100, 300);
    ctx.lineTo(100, 150);
    ctx.stroke();

    ctx.moveTo(100, 150);
    ctx.lineTo(350, 150);
    ctx.stroke();

    ctx.moveTo(350, 150);
    ctx.lineTo(350, 50);
    ctx.stroke();

    ctx.moveTo(350, 50);
    ctx.lineTo(500, 50);
    ctx.stroke();

    ctx.moveTo(100, 0);
    ctx.lineTo(100, 100);
    ctx.stroke();

    ctx.moveTo(100, 100);
    ctx.lineTo(300, 100);
    ctx.stroke();

    ctx.moveTo(300, 100);
    ctx.lineTo(300, 0);
    ctx.stroke();

    // Add event listener for mouse movement
    canvas.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [failed]);

  const handleMouseMove = (e) => {
    if (!failed) {
      const canvas = document.getElementById('mazeCanvas');
      const ctx = canvas.getContext('2d');
      const rect = canvas.getBoundingClientRect();

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Check for collision with maze lines
      if (mouseX >= 45 && mouseX <= 55 && mouseY >= 0 && mouseY <= 150) {
        // Cursor collided with a line
        setFailed(true);
        setShowCongrats(false); // Hide "Solved" button
      }

      //Top
      if (mouseX >= 0 && mouseX <= 500 && mouseY >= -5 && mouseY <= 5) {
        // Cursor collided with a line
        setFailed(true);
        setShowCongrats(false); // Hide "Solved" button
      }

     //Bottom1
     if (mouseX >= 0 && mouseX <= 225 && mouseY >= 495 && mouseY <= 505) {
        // Cursor collided with a line
        setFailed(true);
        setShowCongrats(false); // Hide "Solved" button
     }

     //Bottom2
     if (mouseX >= 275 && mouseX <= 500 && mouseY >= 495 && mouseY <= 505) {
        // Cursor collided with a line
        setFailed(true);
        setShowCongrats(false); // Hide "Solved" button
     }

      //Left
      if (mouseX >= -5 && mouseX <= 5 && mouseY >= 0 && mouseY <= 500) {
        // Cursor collided with a line
        setFailed(true);
        setShowCongrats(false); // Hide "Solved" button
      }

      //Right
      if (mouseX >= 495 && mouseX <= 505 && mouseY >= 0 && mouseY <= 500) {
        // Cursor collided with a line
        setFailed(true);
        setShowCongrats(false); // Hide "Solved" button
      }

      const checkCollision = (lineX1, lineY1, lineX2, lineY2) => {
        const padding = 5; // Adjust this value based on your preference
        const inLine = mouseX >= Math.min(lineX1, lineX2) - padding &&
                       mouseX <= Math.max(lineX1, lineX2) + padding &&
                       mouseY >= Math.min(lineY1, lineY2) - padding &&
                       mouseY <= Math.max(lineY1, lineY2) + padding;
      
        if (inLine) {
          setFailed(true);
          setShowCongrats(false); // Hide "Solved" button
        }
      };

    checkCollision(275, 500, 275, 300);
    checkCollision(225, 500, 225, 350);
    checkCollision(275, 300, 100, 300);
    checkCollision(225, 350, 50, 350);
    checkCollision(50, 350, 50, 150);
    checkCollision(100, 300, 100, 150);
    checkCollision(100, 150, 350, 150);
    checkCollision(350, 150, 350, 50);
    checkCollision(350, 50, 500, 50);
    checkCollision(100, 0, 100, 100);
    checkCollision(100, 100, 300, 100);
    checkCollision(300, 100, 300, 0);

    }
  };

  const handleCongratsClick = () => {
    setShowCongrats(false);
    onClose();
  };

  const handleSolveClick = () => {
    setShowCongrats(true);
    onSolve(); // You can keep this line if it has additional functionality
  
    // Set a timeout to simulate the download process
    setTimeout(() => {
      setShowCongrats(false); // Close the "Downloading Now" message
      onClose(); // Close the entire popup
    }, 1000);
  };

  return (
    <div className={`maze-popup${failed ? ' failed' : ''}`}>
      {showDirections && <DirectionsPopup onClose={() => setShowDirections(false)} />}
      {!failed && (
        <button className={`solve-button${showCongrats ? ' hide' : ''}`} onClick={handleSolveClick}>
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      )}
      {showCongrats ? (
        <div className="congrats-message">
          <p>Downloading Now!</p>
        </div>
      ) : null}
      <canvas id="mazeCanvas" width="100" height="150" />
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default MazePopup;
