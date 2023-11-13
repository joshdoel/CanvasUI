import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faUser } from '@fortawesome/free-solid-svg-icons';

const ChatBoxButton = () => {
  const [showMessagesOverlay, setShowMessagesOverlay] = useState(false);
  const [showRecipientPopup, setShowRecipientPopup] = useState(false);
  const [selectedRecipient, setSelectedRecipient] = useState(null);
  const [typedMessage, setTypedMessage] = useState('');

  // Use a dictionary to store message histories for each recipient
  const [messageHistories, setMessageHistories] = useState({});

  const handleOverlayToggle = () => {
    setShowMessagesOverlay(!showMessagesOverlay);
  };

  const handleRecipientPopupToggle = () => {
    setShowRecipientPopup(!showRecipientPopup);
  };

  const handleRecipientSelect = (recipient) => {
    setSelectedRecipient(recipient);
    handleRecipientPopupToggle();

    // If message history for the recipient doesn't exist, create an empty array
    if (!messageHistories[recipient]) {
      setMessageHistories({ ...messageHistories, [recipient]: [] });
    }
  };

  const handleTypedMessageChange = (event) => {
    setTypedMessage(event.target.value);
  };

  const handleSendMessage = () => {
    // Get the current message history for the selected recipient
    const currentMessageHistory = messageHistories[selectedRecipient];
    
    // Update the message history with the new message
    const updatedMessageHistory = [...currentMessageHistory, { content: typedMessage }];
    
    // Update the state with the new message history
    setMessageHistories({
      ...messageHistories,
      [selectedRecipient]: updatedMessageHistory,
    });

    setTypedMessage('');
  };

  const handleKeyDown = (event) => {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSendMessage();
    }
  };

  // Get the message history for the selected recipient
  const currentMessageHistory = messageHistories[selectedRecipient] || [];

  return (
    <>
      <button className="chat-box-button" onClick={handleOverlayToggle}>
        <FontAwesomeIcon icon={faComment} />
      </button>

      {showMessagesOverlay && (
        <div className="messages-overlay">
          <div className="top-left-button" onClick={handleRecipientPopupToggle}>
            <FontAwesomeIcon icon={faUser} />
          </div>
          {selectedRecipient && (
            <div className="top-right-recipient">
              {selectedRecipient}
            </div>
          )}
          <div className="messages-content">
            {currentMessageHistory.map((message, index) => (
              <div key={index} className="message">
                {message.content}
              </div>
            ))}
          </div>
          <div className="bottom-bar">
            <input
              type="text"
              placeholder="Type your message..."
              value={typedMessage}
              onChange={handleTypedMessageChange}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleSendMessage}>▶</button>
          </div>
        </div>
      )}

      {showRecipientPopup && (
        <div className="recipient-popup">
          <div className="recipient-content">
            <button onClick={() => handleRecipientSelect('Deev Talati')}>Deev Talati</button>
            <button onClick={() => handleRecipientSelect('Josh Doelling')}>Josh Doelling</button>
            <button onClick={() => handleRecipientSelect('Dr. Aurisano')}>Dr. Aurisano</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBoxButton;
