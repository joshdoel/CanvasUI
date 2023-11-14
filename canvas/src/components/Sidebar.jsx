import React from 'react';

const Sidebar = ({ onPageChange }) => {
  return (
    <nav className="sidebar">
      <ul>
        <li onClick={() => onPageChange('classSelection')}>Class Selection</li>
        <li onClick={() => onPageChange('grades')}>Grades</li>
        <li onClick={() => onPageChange('calendar')}>Calendar</li>
      </ul>
    </nav>
  );
};

export default Sidebar;