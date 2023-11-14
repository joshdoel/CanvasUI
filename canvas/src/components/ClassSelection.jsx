import React from 'react';

const classes = [
  { id: 1, name: 'Math', description: 'Learn all about numbers and equations.' },
  { id: 2, name: 'Science', description: 'Explore the wonders of the natural world.' },
  { id: 3, name: 'History', description: 'Discover the events that shaped our world.' },
  { id: 4, name: 'English', description: 'Improve your language and literature skills.' },
];

const ClassCard = ({ classData, onCardClick }) => {
  return (
    <div className="class-card" onClick={() => onCardClick(classData.id)}>
      <h3>{classData.name}</h3>
      <p>{classData.description}</p>
    </div>
  );
};

const ClassSelection = ({ onClassSelect }) => {
  return (
    <div className="class-selection">
      <h1>Welcome To Canvas</h1> 
    </div>
  );
};

export default ClassSelection;