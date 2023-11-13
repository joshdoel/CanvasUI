// Assignments.jsx
import React, { useState } from 'react';
import './Assignments.css';
import MazePopup from './MazePopup'; // Adjust the path as needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faCheck  } from '@fortawesome/free-solid-svg-icons';

const Assignments = () => {
    
    const [showMazePopup, setShowMazePopup] = useState(false);

    const handleDownload = () => {
        // Show the maze popup
        setShowMazePopup(true);
      };

    const handleCloseMazePopup = () => {
        // Close the maze popup
        setShowMazePopup(false);
      };

    const handleSubmit = (itemName) => {
        // Implement the logic for submitting the item
        console.log(`Submitting ${itemName}`);
    };

    const handleMazeSolve = () => {
        // Logic to handle what happens after solving the maze
        console.log('Maze solved!');
      };


    return (
        <div className="assignments-container">
            <div className="assignment-section">
                <h2>Homework</h2>
                <ul>
                    <li>
                        Assignment 1
                        <span className="due-date">Due: October 15, 2023</span>
                        <button onClick={() => handleDownload('Assignment 1')} className="download-button">
                            <FontAwesomeIcon icon={faArrowDown} />
                        </button>
                        <button onClick={() => handleSubmit('Assignment 1')} className="submit-button">
                            <FontAwesomeIcon icon={faCheck} />
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
                        <button onClick={() => handleSubmit('Assignment 1')} className="submit-button">
                            <FontAwesomeIcon icon={faCheck} />
                        </button>
                    </li>
                </ul>
            </div>
            {showMazePopup && (
                <MazePopup onClose={handleCloseMazePopup} onSolve={handleMazeSolve} />
            )}
        </div>
    );
};

export default Assignments;
