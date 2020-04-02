import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function CountdownPage() {
  const count = useSelector(s => s.countdown);

  return count > 0 ? (
    <div>
      <h1>COUNTDOWN</h1>
      <h2>Game starts in: {count}</h2>
    </div>
  ) : (
    <Redirect to="/game"></Redirect>
  );
}
