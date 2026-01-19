import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const DateSelectionCalendar = ({ selectedStartDate, selectedEndDate, onDateSelect, blockedDates = [], singleDateSelection = false }) => {
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
    
    if (singleDateSelection) {
      return selectedStartDate && date?.toDateString() === selectedStartDate?.toDateString();
    }
    
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
  
  const isDateAvailable = (day) => {
    if (!day) return false;
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return date.getDay() === 5; // Friday is day 5 (0 = Sunday, 1 = Monday, ..., 5 = Friday)
  };
  
  const isSunday = (day) => {
    if (!day) return false;
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return date.getDay() === 0; // Sunday is day 0
  };
  
  const handleDateClick = (day) => {
    if (!day || isDateBlocked(day) || isPastDate(day) || !isDateAvailable(day)) return;
    
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
    <div className="bg-card rounded-xl p-3 shadow-lg border border-border/50 max-w-sm mx-auto">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrevMonth}
          className="p-1.5 hover:bg-muted rounded-lg transition-colors duration-200"
          aria-label="Previous month"
        >
          <Icon name="ChevronLeft" size={16} />
        </button>
        
        <h3 className="text-sm font-semibold text-foreground text-headline">
          {monthNames?.[currentMonth?.getMonth()]} {currentMonth?.getFullYear()}
        </h3>
        
        <button
          onClick={handleNextMonth}
          className="p-1.5 hover:bg-muted rounded-lg transition-colors duration-200"
          aria-label="Next month"
        >
          <Icon name="ChevronRight" size={16} />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']?.map((day) => (
          <div key={day} className="text-center text-xs font-medium text-muted-foreground py-1">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {calendarDays?.map((day, index) => {
          const isBlocked = isDateBlocked(day);
          const isSelected = isDateSelected(day);
          const isStart = isStartDate(day);
          const isEnd = isEndDate(day);
          const isPast = isPastDate(day);
          const isAvailable = isDateAvailable(day);
          const isSundayDay = isSunday(day);
          
          return (
            <button
              key={index}
              onClick={() => handleDateClick(day)}
              disabled={!day || isBlocked || isPast || !isAvailable}
              className={`
                aspect-square flex items-center justify-center rounded-md text-xs font-medium transition-all duration-200 relative
                ${!day ? 'invisible' : ''}
                ${isSundayDay ? 'text-red-500' : ''}
                ${isPast || isBlocked ? 'text-muted-foreground cursor-not-allowed' : ''}
                ${!isAvailable && !isPast && !isBlocked && !isSundayDay ? 'text-muted-foreground/40 cursor-not-allowed' : ''}
                ${isSelected && !isStart && !isEnd ? 'bg-primary text-primary-foreground shadow-sm' : ''}
                ${isStart || isEnd ? 'bg-primary text-primary-foreground shadow-md ring-1 ring-primary/50' : ''}
                ${isAvailable && !isSelected && !isPast && !isBlocked ? 'bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 cursor-pointer' : ''}
              `}
            >
              {day}
              {isAvailable && !isSelected && (
                <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              )}
            </button>
          );
        })}
      </div>
      <div className="mt-4 pt-3 border-t border-border/50">
        <div className="flex flex-wrap gap-3 text-xs">
          <div className="flex items-center space-x-1.5">
            <div className="w-3 h-3 bg-primary rounded shadow-sm"></div>
            <span className="text-muted-foreground">Selected</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <div className="w-3 h-3 bg-green-50 border border-green-200 rounded relative">
              <span className="absolute top-0 right-0 w-1 h-1 bg-green-500 rounded-full transform translate-x-0.5 -translate-y-0.5"></span>
            </div>
            <span className="text-muted-foreground">Available</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <div className="w-3 h-3 bg-muted rounded text-muted-foreground/40"></div>
            <span className="text-muted-foreground">Not Available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateSelectionCalendar;