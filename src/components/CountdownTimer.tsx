import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = () => {
    // Calculate next Monday
    const now = new Date();
    const daysUntilMonday = (1 + 7 - now.getDay()) % 7;
    const nextMonday = new Date();
    nextMonday.setDate(now.getDate() + daysUntilMonday);
    nextMonday.setHours(0, 0, 0, 0);
    
    const difference = nextMonday.getTime() - now.getTime();
    
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return timeLeft;
  };
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearTimeout(timer);
  });
  
  const timerComponents = [
    { value: timeLeft.days, label: 'Dias' },
    { value: timeLeft.hours, label: 'Horas' },
    { value: timeLeft.minutes, label: 'Minutos' },
    { value: timeLeft.seconds, label: 'Segundos' }
  ];
  
  return (
    <div className="flex justify-center space-x-4 font-mono">
      {timerComponents.map((component, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-white text-green-700 font-bold text-2xl rounded-lg shadow-md w-16 h-16 flex items-center justify-center">
            {String(component.value).padStart(2, '0')}
          </div>
          <span className="text-xs text-gray-600 mt-1">{component.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;