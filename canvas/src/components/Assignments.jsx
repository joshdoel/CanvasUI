import React, { useState } from 'react';
import './Assignments.css';
import MazePopup from './MazePopup';
import SubmissionPopup from './SubmissionPopup';
import ConfirmationPopup from './ConfirmationPopup.jsx';
import HappySubmissionPopup from './HappySubmissionPopup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faCheck } from '@fortawesome/free-solid-svg-icons';

const Assignments = () => {
  const [showMazePopup, setShowMazePopup] = useState(false);
  const [showSubmissionPopup, setShowSubmissionPopup] = useState(false);
  const [showHappySubmissionPopup, setShowHappySubmissionPopup] = useState(false);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

  const handleDownload = () => {
    setShowMazePopup(true);
  };

  const handleCloseMazePopup = () => {
    setShowMazePopup(false);
  };

  const handleSubmit = () => {
    setShowConfirmationPopup(true);
  };

  const handleConfirmSubmission = () => {
    setShowConfirmationPopup(false);
    setShowHappySubmissionPopup(true);
  };

  const handleCancelSubmission = () => {
    setShowConfirmationPopup(false);
    setShowSubmissionPopup(true);
  };

  const handleCloseSubmissionPopup = () => {
    setShowSubmissionPopup(false);
  };

  const handleCloseHappySubmissionPopup = () => {
    setShowHappySubmissionPopup(false);
  };

  const handleMazeSolve = () => {
    console.log('Maze solved!');
  };

  return (
    <div className="assignments-container">
      {/* ... (existing code) */}
      <div className="assignment-section">
        <h2>Homework</h2>
        <ul>
          <li>
            Homework 1
            <span className="due-date">Due: October 21, 2023</span>
            <button onClick={() => handleDownload('Lab 1')} className="download-button">
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
            <button onClick={handleSubmit} className="submit-button">
              Submit
            </button>
          </li>
        </ul>
      </div>

      <div className="assignment-section">
        <h2>Exams</h2>
        <ul>
          <li>
            Midterm Exam
            <span className="due-date">Due: November 5, 2023</span>
          </li>
          {/* Add more exam items */}
        </ul>
      </div>

      <div className="assignment-section">
        <h2>Quizzes</h2>
        <ul>
          <li>
            Quiz 1
            <span className="due-date">Due: September 30, 2023</span>
          </li>
          {/* Add more quiz items */}
        </ul>
      </div>

      <div className="assignment-section">
        <h2>Labs</h2>
        <ul>
          <li>
            Lab 1
            <span className="due-date">Due: October 8, 2023</span>
            <button onClick={() => handleDownload('Lab 1')} className="download-button">
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
            <button onClick={handleSubmit} className="submit-button">
              Submit
            </button>
          </li>
        </ul>
      </div>

      {showMazePopup && <MazePopup onClose={handleCloseMazePopup} onSolve={handleMazeSolve} />}
      {showSubmissionPopup && <SubmissionPopup onClose={handleCloseSubmissionPopup} />}
      {showHappySubmissionPopup && <HappySubmissionPopup onClose={handleCloseHappySubmissionPopup} />}
      {showConfirmationPopup && (
        <ConfirmationPopup
          onConfirm={handleConfirmSubmission}
          onCancel={handleCancelSubmission}
        />
      )}
    </div>
  );
};

export default Assignments;
