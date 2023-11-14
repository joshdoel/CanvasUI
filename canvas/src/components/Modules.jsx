// Modules.jsx
import React from 'react';
import './Modules.css'; // Add your styling as needed

const Modules = ({ subject }) => {
  return (
    <div className="modules-container">
      <h1>{subject} Modules</h1>

      <div className="module">
        <h2>Usability</h2>

        <div className="assignment">
          <p>Assignment 1, Getting started</p>
          <p>Aug 30</p>
        </div>

        <div className="attachment">
          <p>Attachment</p>
          <p>01-01-intro.pptx</p>
        </div>

        <div className="attachment">
          <p>Attachment</p>
          <p>01-02-usability.pptx</p>
        </div>

        <div className="attachment">
          <p>Attachment</p>
          <p>01-03-norman-principals-discoverability.pptx</p>
        </div>
      </div>

      {/* Add more modules as needed */}
    </div>
  );
};

export default Modules;
