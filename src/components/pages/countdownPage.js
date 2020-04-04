import React from 'react';
import { useSelector } from 'react-redux';

export default function CountdownPage() {
  const count = useSelector(s => s.countdown);

  return (
    <div>
      <h1>{count}</h1>
      <h2>Game Begins In...</h2>
    </div>
  );
}
