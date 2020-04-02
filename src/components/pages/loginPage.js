import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function LoginPage() {
  const loggedIn = useSelector(store => store.loggedIn);
  return loggedIn ? <Redirect to="/" /> : <h1>LOG IN -----> over there</h1>;
}