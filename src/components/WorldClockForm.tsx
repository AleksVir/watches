import React, { useState } from 'react';

interface FormProps {
  onAddClock: (city: string, timezone: number) => void;
}

const WorldClockForm: React.FC<FormProps> = ({ onAddClock }) => {
  const [city, setCity] = useState('');
  const [timezone, setTimezone] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddClock(city, timezone);
    setCity('');
    setTimezone(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Название города"
        required
      />
      <input
        type="number"
        value={timezone}
        onChange={(e) => setTimezone(parseInt(e.target.value))}
        placeholder="Временная зона (например, -5)"
        required
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default WorldClockForm;
