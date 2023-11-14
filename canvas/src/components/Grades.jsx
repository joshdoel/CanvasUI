// src/components/Grades.jsx
import React from 'react';

const Grades = () => {
    const classes = [
      {
        className: 'Math',
        assignments: [
          { name: 'Project 1', type: 'project', grade: 'A' },
          { name: 'Exam 1', type: 'exam', grade: 'B' },
          { name: 'Homework 1', type: 'homework', grade: 'C' },
          { name: 'Quiz 1', type: 'quiz', grade: 'A' },
        ],
      },
      {
        className: 'Science',
        assignments: [
          { name: 'Project 1', type: 'project', grade: 'B' },
          { name: 'Exam 1', type: 'exam', grade: 'A' },
          { name: 'Homework 1', type: 'homework', grade: 'A' },
          { name: 'Quiz 1', type: 'quiz', grade: 'B' },
        ],
      },
      {
        className: 'English',
        assignments: [
          { name: 'Project 1', type: 'project', grade: 'A' },
          { name: 'Exam 1', type: 'exam', grade: 'B' },
          { name: 'Homework 1', type: 'homework', grade: 'C' },
          { name: 'Quiz 1', type: 'quiz', grade: 'A' },
        ],
      },
      {
        className: 'History',
        assignments: [
          { name: 'Project 1', type: 'project', grade: 'A' },
          { name: 'Exam 1', type: 'exam', grade: 'B' },
          { name: 'Homework 1', type: 'homework', grade: 'C' },
          { name: 'Quiz 1', type: 'quiz', grade: 'A' },
        ],
      },
    ];

  return (
    <div className="grades">
      {classes.map((classInfo, index) => (
        <div key={index} className="class-card">
          <h2>{classInfo.className}</h2>
          <div className="section">
            <h3>Homework</h3>
            <ul>
              {classInfo.assignments
                .filter((assignment) => assignment.type === 'homework')
                .map((assignment, assignmentIndex) => (
                  <li key={assignmentIndex}>
                    {assignment.name}: {assignment.grade}
                  </li>
                ))}
            </ul>
          </div>
          <div className="section">
            <h3>Projects</h3>
            <ul>
              {classInfo.assignments
                .filter((assignment) => assignment.type === 'project')
                .map((assignment, assignmentIndex) => (
                  <li key={assignmentIndex}>
                    {assignment.name}: {assignment.grade}
                  </li>
                ))}
            </ul>
          </div>
          <div className="section">
            <h3>Quizzes</h3>
            <ul>
              {classInfo.assignments
                .filter((assignment) => assignment.type === 'quiz')
                .map((assignment, assignmentIndex) => (
                  <li key={assignmentIndex}>
                    {assignment.name}: {assignment.grade}
                  </li>
                ))}
            </ul>
          </div>
          <div className="section">
            <h3>Exams</h3>
            <ul>
              {classInfo.assignments
                .filter((assignment) => assignment.type === 'exam')
                .map((assignment, assignmentIndex) => (
                  <li key={assignmentIndex}>
                    {assignment.name}: {assignment.grade}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grades;