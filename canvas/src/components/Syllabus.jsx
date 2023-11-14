// Syllabus.jsx
import React from 'react';
import './Syllabus.css';

const Syllabus = () => {
  return (
    <div className="syllabus">
      <h1>User Interface Design</h1>

      <p><strong>Class times:</strong> Mon, Wed, Fri 1:25pm-2:20pm</p>
      <p><strong>Location:</strong> SWIFT 820</p>
      <p><strong>Instructor:</strong> Dr. Jillian Aurisano</p>
      <p><strong>Email:</strong> jillian.aurisano@uc.edu</p>
      <p><strong>Office:</strong> 812b Rhodes</p>
      <p><strong>Student Hours:</strong> After class M and W from 2:20-3:00pm, or by appointment</p>

      <p><strong>TA:</strong> Jenn Gutman</p>
      <p><strong>Email:</strong> gutmanjm@mail.uc.edu</p>
      <p><strong>Jenn's student hours:</strong> Wed 5-7pm, or by appointment</p>

      <h2>What is this course about:</h2>
      <p>In this class, we are going to explore user interface design - a computer science discipline that considers how to make computers and computational systems useful to people.</p>
      <p>We will be doing lots of:</p>
      <ul>
        <li>sketching - to learn how to think visually</li>
        <li>prototyping- to learn how to evaluate a design before implementing it</li>
        <li>programming- creating real user interfaces</li>
        <li>critiquing- to learn how to discuss the tradeoffs of different approaches</li>
      </ul>

      <p>At the end of this course, students will be able to:</p>
      <ul>
        <li>Employ usability engineering principles when building computing tools</li>
        <li>Design user interfaces from a user-centered approach</li>
        <li>Prototype user interfaces to refine a design</li>
        <li>Ideate, sketch, elaborate and communicate user experiences and interface designs</li>
        <li>Use techniques to improve a UI's efficiency, learnability, and accessibility</li>
        <li>Evaluate user interfaces using human-computer interaction principles</li>
      </ul>

      {/* Include the rest of the syllabus content here */}

    </div>
  );
};

export default Syllabus;
