import React from 'react';

const Grades = () => {
  const classes = [
    {
      className: 'Math Grade',
      assignments: [
        { name: 'Project 1', type: 'project', grade: 90 },
        { name: 'Exam 1', type: 'exam', grade: 80 },
        { name: 'Exam 2', type: 'exam', grade: 49 },
        { name: 'Exam 3', type: 'exam', grade: 70 },
        { name: 'Homework 1', type: 'homework', grade: 70 },
        { name: 'Quiz 1', type: 'quiz', grade: 95 },
      ],
    },
    {
        className: 'Science Grade',
        assignments: [
          { name: 'Project 1', type: 'project', grade: 56 },
          { name: 'Exam 1', type: 'exam', grade: 80 },
          { name: 'Homework 1', type: 'homework', grade: 70 },
          { name: 'Quiz 1', type: 'quiz', grade: 95 },
          { name: 'Quiz 2', type: 'quiz', grade: 60 },
          { name: 'Quiz 3', type: 'quiz', grade: 50 },
          { name: 'Quiz 4', type: 'quiz', grade: 100 },
        ],
      },
      {
        className: 'History Grade',
        assignments: [
          { name: 'Project 1', type: 'project', grade: 90 },
          { name: 'Exam 1', type: 'exam', grade: 80 },
          { name: 'Homework 1', type: 'homework', grade: 80 },
          { name: 'Quiz 1', type: 'quiz', grade: 95 },
          { name: 'Project 2', type: 'project', grade: 90 },
          { name: 'Exam 2', type: 'exam', grade: 80 },
          { name: 'Homework 2', type: 'homework', grade: 70 },
          { name: 'Quiz 2', type: 'quiz', grade: 95 },
          { name: 'Project 1', type: 'project', grade: 90 },
          { name: 'Exam 1', type: 'exam', grade: 80 },
          { name: 'Homework 1', type: 'homework', grade: 70 },
          { name: 'Quiz 1', type: 'quiz', grade: 95 },
        ],
      },
      {
        className: 'English Grade',
        assignments: [
          { name: 'Project 1', type: 'project', grade: 90 },
          { name: 'Exam 1', type: 'exam', grade: 80 },
          { name: 'Homework 1', type: 'homework', grade: 70 },
          { name: 'Quiz 1', type: 'quiz', grade: 95 },
          { name: 'Project 2', type: 'project', grade: 90 },
          { name: 'Exam 2', type: 'exam', grade: 80 },
          { name: 'Homework 2', type: 'homework', grade: 70 },
          { name: 'Quiz 2', type: 'quiz', grade: 95 },
          { name: 'Project 3', type: 'project', grade: 90 },
          { name: 'Quiz 3', type: 'quiz', grade: 95 },
          { name: 'Project 4', type: 'project', grade: 90 },
          { name: 'Exam 4', type: 'exam', grade: 80 },
          { name: 'Homework 4', type: 'homework', grade: 70 },
          { name: 'Quiz 4', type: 'quiz', grade: 95 },
        ],
      },
  ];

  const calculateOverallGrade = (assignments) => {
    const totalPoints = assignments.reduce((sum, assignment) => sum + assignment.grade, 0);
    const averageGrade = totalPoints / assignments.length;
    return averageGrade.toFixed(2); // Round to two decimal places
  };

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
                    {assignment.name}: {assignment.grade}%
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
                    {assignment.name}: {assignment.grade}%
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
                    {assignment.name}: {assignment.grade}%
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
                    {assignment.name}: {assignment.grade}%
                  </li>
                ))}
            </ul>
          </div>
          <div className="section">
            <h3>Overall Grade</h3>
            <p>{calculateOverallGrade(classInfo.assignments)}%</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grades;
