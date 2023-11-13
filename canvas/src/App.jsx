// src/App.jsx
import React, { useState } from 'react';
import './App.css'; // Import the styles

// Components
import Sidebar from './components/Sidebar';
import Calendar from './components/Calendar';
import ClassSelection from './components/ClassSelection';
import ChatBoxButton from './components/ChatBoxButton';

function App() {
  const [currentPage, setCurrentPage] = useState('classSelection');
  const [showChatBox, setShowChatBox] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleChatBoxToggle = () => {
    setShowChatBox(!showChatBox);
  };

  return (
    <div className="app">
      <Sidebar onPageChange={handlePageChange} />
      <main className="content">
        {currentPage === 'classSelection' && <ClassSelection />}
        {currentPage === 'calendar' && <Calendar />}
        {showChatBox && <div className="chat-box">{/* Chat box content */}</div>}
        <ChatBoxButton onChatBoxToggle={handleChatBoxToggle} />
      </main>
    </div>
  );
}

export default App;