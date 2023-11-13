import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Confetti from 'react-confetti';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [monthTasks, setMonthTasks] = useState([]);

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const handleDayClick = (day) => {
    const task = prompt(`Enter tasks for ${selectedDate.toLocaleDateString()}:`);
    if (task) {
      const currentMonth = selectedDate.getMonth();
      const currentYear = selectedDate.getFullYear();

      const updatedTasks = [...monthTasks];
      if (!updatedTasks[currentMonth]) {
        updatedTasks[currentMonth] = {};
      }

      updatedTasks[currentMonth][`${currentYear}-${currentMonth + 1}-${day}`] = task;
      setMonthTasks(updatedTasks);
    }
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(selectedDate.getMonth(), selectedDate.getFullYear());
    const firstDayOfMonth = getFirstDayOfMonth(selectedDate.getMonth(), selectedDate.getFullYear());
    const blanks = Array(firstDayOfMonth).fill(null);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const allDays = [...blanks, ...days];

    return (
      <div className="calendar-grid">
        {allDays.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${day ? '' : 'empty'}`}
            onClick={() => handleDayClick(day)}
          >
            <span className="calendar-day-number">{day}</span>
            {monthTasks[selectedDate.getMonth()]?.[`${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${day}`] && (
              <div className="task-indicator">{monthTasks[selectedDate.getMonth()][`${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${day}`]}</div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const handleMonthChange = (increment) => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + increment, 1));
  };

  const [showToDoList, setShowToDoList] = useState(false);
  const [toDoItems, setToDoItems] = useState([]);
  const [newToDo, setNewToDo] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [confetti, setConfetti] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleToDoListToggle = () => {
    setShowToDoList(!showToDoList);
  };

  const handleAddToDo = () => {
    if (newToDo.trim() !== '') {
      const newItem = {
        task: newToDo,
        dueDate,
        completed: false,
      };

      setToDoItems((prevItems) => [...prevItems, newItem]);
      setNewToDo('');
      setDueDate('');
      setIsChecked(false); // Reset isChecked state
    }
  };

  const handleToggleComplete = (index) => {
    setToDoItems((prevItems) => {
      const updatedItems = [...prevItems];
      const isCompletedBeforeToggle = updatedItems[index].completed;

      // Toggle completion
      updatedItems[index].completed = !isCompletedBeforeToggle;

      // Check if the box becomes checked
      if (!isCompletedBeforeToggle) {
        setIsChecked(true);
        setConfetti(true);

        // Reset confetti after a short delay
        setTimeout(() => {
          setConfetti(false);
        }, 3000);
      } else {
        setIsChecked(false);
      }

      return updatedItems;
    });
  };


  return (
    <div className="calendar">
      {confetti && <Confetti />} {/* Confetti effect */}
      <h1>Calendar Page</h1>
      <div className="calendar-header">
        <button onClick={() => handleMonthChange(-1)}>Previous Month</button>
        <span>{`${selectedDate.toLocaleString('default', { month: 'long' })} ${selectedDate.getFullYear()}`}</span>
        <button onClick={() => handleMonthChange(1)}>Next Month</button>
      </div>
      <div className="calendar-weekdays">
        {weekdays.map((day, index) => (
          <div key={index} className="calendar-weekday">
            {day}
          </div>
        ))}
      </div>
      {renderCalendar()}
       <button className="todo-list-button" onClick={handleToDoListToggle}>
        📝 To-Do
      </button>
      {showToDoList && (
        <div className="overlay">
          <div className="modal">
            <h2>To-Do List</h2>
            <ul>
              {toDoItems.map((item, index) => (
                <li key={index} onClick={() => handleToggleComplete(index)}>
                  <Checkbox
                    checked={item.completed}
                    onChange={() => handleToggleComplete(index)}
                  />
                  <span
                    style={{
                      textDecoration: item.completed ? 'line-through' : 'none',
                      marginLeft: '8px',
                    }}
                  >
                    {item.task} (Due: {item.dueDate})
                  </span>
                </li>
              ))}
            </ul>
            <input
              type="text"
              placeholder="Add a new to-do..."
              value={newToDo}
              onChange={(e) => setNewToDo(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter due date (optional)"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
            <button onClick={handleAddToDo}>Add</button>
            <button onClick={handleToDoListToggle}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};


export default Calendar;
