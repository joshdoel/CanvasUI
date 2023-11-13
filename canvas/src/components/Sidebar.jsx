import React, { useState } from 'react';

const Sidebar = ({ onPageChange }) => {
  const [isMathDropdownOpen, setMathDropdownOpen] = useState(false);

  const handleMathClick = () => {
    setMathDropdownOpen(!isMathDropdownOpen);
  };

  const handleMathItemClick = (subpage) => {
    onPageChange(`Math/${subpage}`);
    setMathDropdownOpen(false);
  };

  return (
    <nav className="sidebar">
      <ul>
        <li onClick={handleMathClick} className={isMathDropdownOpen ? 'active' : ''}>
          Math
          {isMathDropdownOpen && (
            <ul className="dropdown-list">
              <li onClick={() => handleMathItemClick('Modules')}>Modules</li>
              <li onClick={() => handleMathItemClick('Assignments')}>Assignments</li>
              <li onClick={() => handleMathItemClick('Syllabus')}>Syllabus</li>
              <li onClick={() => handleMathItemClick('Zoom')}>Zoom</li>
              {/* Add more items as needed */}
            </ul>
          )}
        </li>
        <li onClick={() => onPageChange('grades')}>Grades</li>
        <li onClick={() => onPageChange('calendar')}>Calendar</li>
      </ul>
    </nav>
  );
};

export default Sidebar;
