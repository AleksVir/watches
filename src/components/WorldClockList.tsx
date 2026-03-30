import React, { useState } from 'react';
import WorldClock from './WorldClock';
import WorldClockForm from './WorldClockForm';

interface ClockItem {
  id: string;
  city: string;
  timezone: number;
}

const WorldClockList: React.FC = () => {
  const [clocks, setClocks] = useState<ClockItem[]>([]);

  const addClock = (city: string, timezone: number) => {
    setClocks([
      ...clocks,
      { id: Date.now().toString(), city, timezone },
    ]);
  };

  const deleteClock = (id: string) => {
    setClocks(clocks.filter((clock) => clock.id !== id));
  };

  return (
    <div className="clock-list">
      <WorldClockForm onAddClock={addClock} />
      {clocks.map((clock) => (
        <WorldClock
          key={clock.id}
          city={clock.city}
          timezone={clock.timezone}
          onDelete={() => deleteClock(clock.id)}
        />
      ))}
    </div>
  );
};

export default WorldClockList;
