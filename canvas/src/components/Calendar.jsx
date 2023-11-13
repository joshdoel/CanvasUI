import React, { useState } from 'react';

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

  return (
    <div className="calendar">
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
    </div>
  );
};

export default Calendar;
