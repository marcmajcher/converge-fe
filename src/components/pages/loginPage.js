import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function LoginPage() {
  const loggedIn = useSelector(s => s.loggedIn);
  const endpoint = useSelector(s => s.endpoint);

  return loggedIn ? (
    <Redirect to="/" />
  ) : (
    <div>
      <h1>LOG IN -----> over there</h1>
      <h2>ENV: {process.env.NODE_ENV}</h2>
      <h2>URL: {endpoint}</h2>
    </div>
  );
}
