import React from 'react';
import './App.css';
import GoogleLoginButton from './components/google-login-button';

function App() {
  return (
    <div className="App">
      Log in: <GoogleLoginButton></GoogleLoginButton>
    </div>
  );
}

export default App;
