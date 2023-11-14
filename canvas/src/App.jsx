// src/App.jsx
import React, { useState } from 'react';
import './App.css'; // Import the styles

// Components
import Sidebar from './components/Sidebar';
import Calendar from './components/Calendar';
import ClassSelection from './components/ClassSelection';
import ChatBoxButton from './components/ChatBoxButton';
import ZoomPage from './components/ZoomPage';
import Syllabus from './components/Syllabus';
import Assignments from './components/Assignments';
import Modules from './components/Modules';

function App() {
  const [currentPage, setCurrentPage] = useState('classSelection');
  const [showChatBox, setShowChatBox] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleChatBoxToggle = () => {
    setShowChatBox(!showChatBox);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'classSelection':
        return <ClassSelection />;
      case 'calendar':
        return <Calendar />;
      case 'Math/Zoom':
        return <ZoomPage />;
      case 'Math/Syllabus':
        return <Syllabus />;
      case 'Math/Assignments':
        return <Assignments />;
        case 'Math/Modules':
          return <Modules />;
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <Sidebar onPageChange={handlePageChange} />
      <main className="content">
        {renderPage()}
        {showChatBox && <div className="chat-box">{/* Chat box content */}</div>}
        <ChatBoxButton onChatBoxToggle={handleChatBoxToggle} />
      </main>
    </div>
  );
}

export default App;
