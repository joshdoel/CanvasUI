import React, { useState } from 'react';

const Sidebar = ({ onPageChange }) => {
  const [isMathDropdownOpen, setMathDropdownOpen] = useState(false);
  const [isScienceDropdownOpen, setScienceDropdownOpen] = useState(false);
  const [isSocialStudiesDropdownOpen, setSocialStudiesDropdownOpen] = useState(false);
  const [isEnglishDropdownOpen, setEnglishDropdownOpen] = useState(false);

  const handleDropdownClick = (dropdown, setDropdownOpen) => {
    setDropdownOpen(!dropdown);
  };

  const handleItemClick = (subpage) => {
    if (subpage === 'Math/Zoom') {
      window.open('https://zoom.us/', '_blank');
    } else {
      onPageChange(subpage);
    }
  };

  return (
    <nav className="sidebar">
      <ul>
        <li onClick={() => handleDropdownClick(isMathDropdownOpen, setMathDropdownOpen)} className={isMathDropdownOpen ? 'active' : ''}>
          Math
          {isMathDropdownOpen && (
            <ul className="dropdown-list">
              <li onClick={() => handleItemClick('Math/Modules')}>Modules</li>
              <li onClick={() => handleItemClick('Math/Assignments')}>Assignments</li>
              <li onClick={() => handleItemClick('Math/Syllabus')}>Syllabus</li>
              <li onClick={() => handleItemClick('Math/Zoom')}>Zoom</li>
              {/* Add more items as needed */}
            </ul>
          )}
        </li>
        <li onClick={() => handleDropdownClick(isScienceDropdownOpen, setScienceDropdownOpen)} className={isScienceDropdownOpen ? 'active' : ''}>
          Science
          {isScienceDropdownOpen && (
            <ul className="dropdown-list">
              <li onClick={() => handleItemClick('Math/Modules')}>Modules</li>
              <li onClick={() => handleItemClick('Math/Assignments')}>Assignments</li>
              <li onClick={() => handleItemClick('Math/Syllabus')}>Syllabus</li>
              <li onClick={() => handleItemClick('Math/Zoom')}>Zoom</li>
            </ul>
          )}
        </li>
        <li onClick={() => handleDropdownClick(isSocialStudiesDropdownOpen, setSocialStudiesDropdownOpen)} className={isSocialStudiesDropdownOpen ? 'active' : ''}>
          History
          {isSocialStudiesDropdownOpen && (
            <ul className="dropdown-list">
              <li onClick={() => handleItemClick('Math/Modules')}>Modules</li>
              <li onClick={() => handleItemClick('Math/Assignments')}>Assignments</li>
              <li onClick={() => handleItemClick('Math/Syllabus')}>Syllabus</li>
              <li onClick={() => handleItemClick('Math/Zoom')}>Zoom</li>
            </ul>
          )}
        </li>
        <li onClick={() => handleDropdownClick(isEnglishDropdownOpen, setEnglishDropdownOpen)} className={isEnglishDropdownOpen ? 'active' : ''}>
          English
          {isEnglishDropdownOpen && (
            <ul className="dropdown-list">
              <li onClick={() => handleItemClick('Math/Modules')}>Modules</li>
              <li onClick={() => handleItemClick('Math/Assignments')}>Assignments</li>
              <li onClick={() => handleItemClick('Math/Syllabus')}>Syllabus</li>
              <li onClick={() => handleItemClick('Math/Zoom')}>Zoom</li>
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
