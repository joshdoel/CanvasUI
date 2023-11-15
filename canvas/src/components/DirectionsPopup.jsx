// DirectionsPopup.jsx
import React, { useState, useEffect } from 'react';
import './DirectionsPopup.css';

const DirectionsPopup = ({ onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose(); // Close the directions popup after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [onClose]);

  return (
    <div className={`directions-popup${visible ? '' : ' hidden'}`}>
      <p>Follow the maze to the end.</p>
      <p>Don't touch any red lines.</p>
      <p>If you do, you won't be able to do your homework!</p>
    </div>
  );
};

export default DirectionsPopup;
