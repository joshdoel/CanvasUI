// src/App.jsx
import React, { useState } from 'react';
import './App.css'; // Import the styles

// Components
import Sidebar from './components/Sidebar';
import Calendar from './components/Calendar';
import ClassSelection from './components/ClassSelection';

function App() {
  const [currentPage, setCurrentPage] = useState('classSelection');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app">
      <Sidebar onPageChange={handlePageChange} />
      <main className="content">
        {currentPage === 'classSelection' && <ClassSelection />}
        {currentPage === 'calendar' && <Calendar />}
      </main>
    </div>
  );
}

export default App;