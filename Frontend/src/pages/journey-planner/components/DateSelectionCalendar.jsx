import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const DateSelectionCalendar = ({ selectedStartDate, selectedEndDate, onDateSelect, blockedDates = [] }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0)?.getDate();
  };
  
  const firstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1)?.getDay();
  };
  
  const generateCalendarDays = () => {
    const days = [];
    const totalDays = daysInMonth(currentMonth);
    const firstDay = firstDayOfMonth(currentMonth);
    
    for (let i = 0; i < firstDay; i++) {
      days?.push(null);
    }
    
    for (let day = 1; day <= totalDays; day++) {
      days?.push(day);
    }
    
    return days;
  };
  
  const isDateBlocked = (day) => {
    if (!day) return false;
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return blockedDates?.some(blocked => 
      blocked?.getDate() === date?.getDate() &&
      blocked?.getMonth() === date?.getMonth() &&
      blocked?.getFullYear() === date?.getFullYear()
    );
  };
  
  const isDateSelected = (day) => {
    if (!day) return false;
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    
    if (selectedStartDate && !selectedEndDate) {
      return date?.toDateString() === selectedStartDate?.toDateString();
    }
    
    if (selectedStartDate && selectedEndDate) {
      return date >= selectedStartDate && date <= selectedEndDate;
    }
    
    return false;
  };
  
  const isStartDate = (day) => {
    if (!day || !selectedStartDate) return false;
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return date?.toDateString() === selectedStartDate?.toDateString();
  };
  
  const isEndDate = (day) => {
    if (!day || !selectedEndDate) return false;
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return date?.toDateString() === selectedEndDate?.toDateString();
  };
  
  const isPastDate = (day) => {
    if (!day) return false;
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today?.setHours(0, 0, 0, 0);
    return date < today;
  };
  
  const handleDateClick = (day) => {
    if (!day || isDateBlocked(day) || isPastDate(day)) return;
    
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    onDateSelect(date);
  };
  
  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };
  
  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };
  
  const calendarDays = generateCalendarDays();
  
  return (
    <div className="bg-card rounded-lg p-4 md:p-6 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handlePrevMonth}
          className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
          aria-label="Previous month"
        >
          <Icon name="ChevronLeft" size={20} />
        </button>
        
        <h3 className="text-lg md:text-xl font-semibold text-foreground text-headline">
          {monthNames?.[currentMonth?.getMonth()]} {currentMonth?.getFullYear()}
        </h3>
        
        <button
          onClick={handleNextMonth}
          className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
          aria-label="Next month"
        >
          <Icon name="ChevronRight" size={20} />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']?.map((day) => (
          <div key={day} className="text-center text-xs md:text-sm font-semibold text-muted-foreground py-2">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {calendarDays?.map((day, index) => {
          const isBlocked = isDateBlocked(day);
          const isSelected = isDateSelected(day);
          const isStart = isStartDate(day);
          const isEnd = isEndDate(day);
          const isPast = isPastDate(day);
          
          return (
            <button
              key={index}
              onClick={() => handleDateClick(day)}
              disabled={!day || isBlocked || isPast}
              className={`
                aspect-square flex items-center justify-center rounded-lg text-sm md:text-base font-medium transition-all duration-200
                ${!day ? 'invisible' : ''}
                ${isPast || isBlocked ? 'text-muted-foreground/30 cursor-not-allowed' : ''}
                ${isSelected && !isStart && !isEnd ? 'bg-primary/20 text-primary' : ''}
                ${isStart || isEnd ? 'bg-primary text-primary-foreground' : ''}
                ${!isSelected && !isPast && !isBlocked ? 'hover:bg-muted cursor-pointer' : ''}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex flex-wrap gap-4 text-xs md:text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-primary rounded" />
            <span className="text-muted-foreground">Selected</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-muted-foreground/30 rounded" />
            <span className="text-muted-foreground">Unavailable</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateSelectionCalendar;