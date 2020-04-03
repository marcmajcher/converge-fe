import React from 'react';
import { useSelector } from 'react-redux';

export default function CountdownPage() {
  const count = useSelector(s => s.countdown);

  return (
    <div>
      <h1>COUNTDOWN</h1>
      <h2>Game starts in: {count}</h2>
    </div>
  );
}
