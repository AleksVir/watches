import React, { useEffect, useState } from 'react';

interface ClockProps {
  city: string;
  timezone: number;
  onDelete: () => void;
}

const WorldClock: React.FC<ClockProps> = ({ city, timezone, onDelete }) => {
  const [localTime, setLocalTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const cityTime = new Date(utc + timezone * 3600000);
      setLocalTime(cityTime);
    }, 1000);

    return () => clearInterval(timerId); // Очистка таймера при удалении компонента
  }, [timezone]);

  return (
    <div className="clock-item">
      <div>{city}</div>
      <div>{localTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</div>
      <button onClick={onDelete}>×</button>
    </div>
  );
};

export default WorldClock;
