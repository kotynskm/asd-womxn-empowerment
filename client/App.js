import React from 'react';
import './stylesheets/app.css';
import Login from './components/Login'

export default function App() {
  return (
    <div className="app">
      <h1>App component is rendering</h1>
      <Login />
    </div>
  );
}
